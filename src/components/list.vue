<template>
  <div class="outer-wrapper">
    <div class="header-common-wrapper">
      <div class="left">
        <span class="back" @click="back">
          <img src="static/image/icon-back-white.png" class="icon">
        </span>
      </div>
      <div class="content">
        充值记录
      </div>
      <div class="right">
        <span class="option">
        </span>
      </div>
    </div>
    <div class="content-common-wrapper">
      <div class="list-wrapper">
        <div class="item-wrapper" v-for="item in data">
          <div class="title">
            <div class="num">
              订单编号：{{item.id}}
            </div>
            <div class="state">
              <span class="success" v-if="item.type===0">已支付</span>
              <span class="faile" v-else="item.type===0">未支付</span>
            </div>
          </div>
          <div class="content">
            <div class="icon-wrapper">
              <img class="icon" src="static/image/icon-phone.png" alt="">
            </div>
            <div class="detail">
              <div class="num">充值号码：{{item.num }}</div>
              <div class="money">充值内容：{{item.money }}</div>
              <div class="time">{{item.utime}}</div>
            </div>
            <div class="point">
              积分：{{item.point}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {GetUserInfo, RechargeList} from '@/api/api'

  export default {
    name: 'list',
    data() {
      return {
        data: []
      }
    },
    created() {
      debugger
      if (this.$root.info.payload) {
        this._initData()
      } else {
        GetUserInfo().then((res) => {
          this.$root.info = res.data
          this._initData()
        })
      }
    },
    methods: {
      back() {
        this.$router.push('/')
      },
      _initData() {
        debugger
        RechargeList(this.$root.info.payload.id).then((res) => {
          console.log(res.data.payload.content)
          res = res.data.payload.content
          for (var int = 0; int < res.length; int++) {
            //2.确定订单类型和金额
            var point = res[int].point;
            var money;
            if (point <= 150) {
              money = (point / 15).toFixed(2);
            } else {
              money = (point / 12).toFixed(2);
            }
            if (res[int].type == 0) {
              money += '元话费';
            } else {
              money += '元流量';
            }
            res[int].money = money;
          }
          this.data = res
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
  @import "../common/less/variable";
  @import "../common/less/mixin";

  .list-wrapper {
    .item-wrapper {
      margin-top: 12px;
      .title {
        display: flex;
        padding: 0 12px;
        height: 36px;
        line-height: 36px;
        background-color: #fff;
        font-size: 13px;
        .num {
          flex: 1;
          color: @light-grey;
        }
        .state {
          flex: 0 0 50px;
          text-align: right;
          color: @orange-color;
        }
      }
      .content {
        display: flex;
        padding: 12px;
        box-sizing: border-box;
        background-color: #eee;
        .icon-wrapper {
          flex: 0 0 60px;
          .icon {
            width: 48px;
          }
        }
        .detail {
          flex: 1;
          line-height: 21px;
          .num {
            font-weight: bold;
          }
          .money {
            font-size: 13px;
            font-weight: bold;
          }
          .time {
            font-weight: normal;
            font-size: 12px;
            color: @light-grey;
          }
        }
        .point {
          font-weight: bold;
        }
      }
    }
  }
</style>
