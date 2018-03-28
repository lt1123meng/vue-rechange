<template>
  <div class="outer-wrapper">
    <div class="header-common-wrapper">
      <div class="left">
        <span class="back">
          <img src="static/image/icon-back-white.png" class="icon">
        </span>
      </div>
      <div class="content">
        话费充值
      </div>
      <div class="right">
        <span class="option" @click="goRechargeList">
          充值记录
        </span>
      </div>
    </div>
    <div class="content-common-wrapper">
      <div class="content-wrapper">
        <div class="phone-number-wrapper">
          <input type="text" v-model="phone" class="input" placeholder="请输入手机号">
          <div class="reason">{{reason}}</div>
        </div>
        <div class="taocan-wrapper">
          <div class="title-wrapper">
            套餐选择
          </div>
          <div class="detail-wrapper">
            <div class="box-wrapper" :class="{'active':index===activeIndex}"
                 v-for="(item,index) in array"
                 @click="chooseThis(index)">
              <div class="box">
                <p class="money">{{item.money}}元</p>
                <p class="integrate">售价：{{item.integrate}}积分</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <div class="integrate-wrapper wrapper">
          <div class="name">积分抵付<span class="tag">({{integrate}})积分</span></div>
          <div class="integrate">
            {{array[activeIndex].integrate}}积分
          </div>
        </div>
        <div class="money-wrapper wrapper" v-show="integrate!==''&&integrate<array[activeIndex].integrate">
          <div class="name">现金支付</div>
          <div class="integrate">
            需要
          </div>
        </div>
      </div>
      <div class="tail-wrapper">
        <button class="button" @click="quickRecharge">{{buttonText}}</button>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {RegPhone, PostPhones, PutPhones} from '@/api/api'
  import {Integrate} from '@/common/js/mixin'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        reason: '',
        phone: '',
        num: '',
        phoneTrue: false,
        httpTrue: false,
        current: {},
        activeIndex: 0,
        buttonText: '确认支付',
        array: [
          {
            money: 1,
            integrate: 15
          }, {
            money: 5,
            integrate: 75
          }, {
            money: 10,
            integrate: 150
          }, {
            money: 30,
            integrate: 360
          }, {
            money: 50,
            integrate: 600
          }, {
            money: 100,
            integrate: 1200
          }
        ]
      }
    },
    mixins: [Integrate],
    created() {
      this.flag = false
      this.chooseThis(0)
    },
    methods: {
      chooseThis(index) {
        this.buttonText = '正在校验...'
        this.httpTrue = false
        this.activeIndex = index
        this.current = this.array[this.activeIndex];
        var cal = () => {
          this.httpPhone()
        }
        cal();
      },
      quickRecharge() {
        if (this.flag) return
        if (this.httpTrue) {
          this.flag = true
          this.buttonText = '正在充值...'
          this.current.id = new Date().getTime() + "" + Math.round(Math.random() * 1000)
          this.current.order_id = this.current.id;
          this.current.user_id = this.$root.info.payload.id;
          this.current.user_openid = sessionStorage.oid;
          this.current.num = this.num;
          this.current.type = 0;
          this.current.point = this.current.integrate;
          if (this.integrate - this.current.integrate >= 0) {
            this.current._point = this.current.integrate;
            this.current._money = 0;
          } else {
            this.current._point = this.integrate;
            if (this.current.money <= 5) {
              this.current._money = parseFloat((this.current.money * 15 - this.current.integrate).toFixed(2))
            } else {
              this.current._money = parseFloat((this.current.money * 12 - this.current.integrate).toFixed(2));
            }
          }
          //先创建对象,保证远程支付失败以后也能再次支付
          PostPhones(this.current).then((res) => {
            if (this.integrate < this.current.integrate) {
              window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + window.appID +
                "&redirect_uri=" + window.payRedirect + this.current.id + "/" + this.current.integrate + "/" + this.current.user_openid +
                "&response_type=code&scope=snsapi_base&state=phone_money#wechat_redirect";
            } else {
              //纯积分支付
              console.log(this.current)
              PutPhones(this.current).then((res) => {
                this.flag = false
                res = res.data
                this.buttonText = '确认支付'
                if (res.payload.success) {
                  this.$router.push('/success/' + this.current.order_id)
                } else {
                  this.$router.push('/error/' + this.current.order_id)
                }
              })
            }
          })
        }
      },
      regPhone(number) {
        let reg = /^(((13[0-9]{1})|(18[0-9]{1})|(15[0-9]{1}))+\d{8})$/
        if (!reg.test(number)) {
          this.reason = '未知号码'
        } else {
          this.buttonText = '正在校验...'
          this.phoneTrue = true
          this.chooseThis(this.activeIndex)
        }
      },
      httpPhone() {
        if (!this.phoneTrue) {
          this.buttonText = '确认支付'
          return
        }
        let matchNum = /[0-9]+/g
        let matchNumArray = this.phone.match(matchNum)
        let matchNumInt = matchNumArray.join('')
        RegPhone(matchNumInt, this.array[this.activeIndex].money).then((res) => {
          var result = res.data.payload;
          this.buttonText = '确认支付'
          if (result.success) {
            this.httpTrue = true
            this.reason = result.stock.result.game_area
          } else {
            this.httpTrue = false
            this.reason = '暂不支持此号码充值'
          }
        })
      },
      goRechargeList() {
        this.$router.push('/list')
      }
    },
    watch: {
      phone: function (newVal, oldVal) {
        this.phoneTrue = false
        this.httpTrue = false
        if (oldVal.substring(oldVal.length - 1, oldVal.length) === ' ') {
          newVal = newVal.substring(0, newVal.length - 1)
        }
        let matchNum = /[0-9]+/g
        let matchNumArray = newVal.match(matchNum)
        if (!matchNumArray || matchNumArray == 'null') {
          this.phone = ''
          this.reason = ''
        } else {
          let matchNumInt = matchNumArray.join('')
          matchNumInt = matchNumInt.substr(0, 11)
          if (matchNumInt.length === 11) {
            this.regPhone(matchNumInt)
            this.num = matchNumInt
          } else {
            this.reason = ''
          }
          if (matchNumInt.length > 7) {
            matchNumInt = matchNumInt.substr(0, 7) + ' ' + matchNumInt.substr(7, matchNumInt.length)
            matchNumInt = matchNumInt.substr(0, 3) + ' ' + matchNumInt.substr(3, matchNumInt.length)
          } else if (matchNumInt.length > 3) {
            matchNumInt = matchNumInt.substr(0, 3) + ' ' + matchNumInt.substr(3, matchNumInt.length)
          }
          this.phone = matchNumInt
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "../common/less/variable";
  @import "../common/less/mixin";

  .outer-wrapper {
    .content-common-wrapper {
      padding: 22px 0;
      box-sizing: border-box;
      .content-wrapper {
        padding: 12px;
        box-sizing: border-box;
        background-color: #fff;
        .phone-number-wrapper {
          padding: 6px 0 18px 0;
          border-bottom: 1px solid @body-color;
          .input {
            font-size: 24px;
          }
          .reason {
            color: #ff1b10;
            font-size: 12px;
          }
        }
        .taocan-wrapper {
          .title-wrapper {
            height: 48px;
            line-height: 48px;
            font-size: 12px;
            color: @light-grey;
          }
          .detail-wrapper {
            margin: -6px;
            display: flex;
            flex-wrap: wrap;
            .box-wrapper {
              flex: 0 0 33.3%;
              padding: 6px;
              box-sizing: border-box;
              .box {
                padding: 10px 0;
                border-radius: 4px;
                text-align: center;
                border: 1px solid @wx-color;
                color: @wx-color;
                .integrate {
                  font-size: 12px;
                }
              }
              &.active {
                .box {
                  background-color: @wx-color;
                  color: #fff;
                }
              }
            }
          }
        }
      }
      .result-wrapper {
        margin-top: 12px;
        padding: 0 12px;
        box-sizing: border-box;
        background-color: #fff;
        .wrapper {
          height: 42px;
          line-height: 42px;
          display: flex;
          .name {
            flex: 0 0 200px;
            .tag {
              font-size: 12px;
              color: @wx-color;
            }
          }
          .integrate {
            flex: 1;
            text-align: right;
            color: @orange-color;
          }
        }
        .money-wrapper {
          border-top: 1px solid @body-color;
          .integrate {
            color: @red-color;
          }
        }
      }
      .tail-wrapper {
        margin-top: 22px;
        padding: 12px;
        box-sizing: border-box;
        .button {
          height: 36px;
          line-height: 36px;
          width: 100%;
          text-align: center;
          border-radius: 4px;
          background-color: @wx-color;
          color: #fff;
        }
      }
    }
  }
</style>
