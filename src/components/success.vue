<template>
  <div class="outer-wrapper">
    <div class="header-common-wrapper">
      <div class="left" @click="back">
        <span class="back">
          <img src="static/image/icon-back-white.png" class="icon">
        </span>
        <div class="option">
          话费充值
        </div>
      </div>
      <div class="content">

      </div>
      <div class="right">
        <span class="option" @click="goRechargeList">
          充值记录
        </span>
      </div>
    </div>
    <div class="content-common-wrapper">
      <div class="content">
        <img class="icon" src="static/image/icon-success.png">
        <div class="success">恭喜支付成功</div>
      </div>
      <div class="detail">
        <div>订单编号：{{id}}</div>
        <div>订单状态：支付成功</div>
      </div>
      <div class="tail">如有疑问，请及时联系客服</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'success',
    data() {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      back() {
        this.$router.replace('/')
      },
      goRechargeList() {
        this.$router.replace('/list')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
  .content-common-wrapper {
    .content {
      padding: 42px 0;
      text-align: center;
      background-color: #fff;
      .icon {
        width: 90px;
      }
      .success {
        margin-top: 8px;
        font-size: 17px;
        font-weight: bold;
        color: #f6ab67;
      }
    }

    .detail {
      margin-top: 1px;
      padding: 12px;
      line-height: 21px;
      font-size: 12px;
      color: #999;
      background-color: #fff;
    }
    .tail {
      line-height: 36px;
      color: #999;
      text-align: center;
      font-size: 12px;
      transform: scale(0.9);
    }
  }
</style>
