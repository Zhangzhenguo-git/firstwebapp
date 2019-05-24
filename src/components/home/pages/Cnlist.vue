<template>
  <div class="cnlist">
    <div class="cnlist-title">
      <img :src="productimg" alt="">
      <span>猜你喜欢</span>
    </div>
    <div class="cnlist-list">
      <ul>
        <!-- <li class="cnlist-item border-bottom" v-for="(item,index) in productDataList" :key="index"> -->
        <li class="cnlist-item border-bottom" v-for="(item,index) in productDatas" :key="index">
          <div class="item-img">
            <img :src="item.imgUrl">
          </div>
          <div class="item-text">
            <div class="item-title">
              {{item.title}}</div>
            <div class="item-message">
              {{item.message}}</div>
            <div class="item-map">
              <span class="item-map-price">￥<b>{{item.price}}</b></span>起
              <span class="item-map-address">{{item.address}}</span>
            </div>
          </div>
          <!-- <div class="border-bottom"></div> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    props: {
      productDatas: {
        type: Array,
        required: true
      },
      productimg:{
        type: String,
        required: true
      }
    },
    created() {
      // const query = Bmob.Query("product");
      // query.find().then(res => {
      //   var prodJson=JSON.stringify(res);
      //   console.log("转换数据2",prodJson);
      //   this.productDatas=JSON.parse(prodJson);
      // }).catch(err => {
      //   console.log(err);
      // })
    }
  }

</script>
<style scoped>
  .cnlist {
    width: 100%;
    font-size: .28rem;
    background: #ffffff;
    padding: .2rem .1rem;
    margin-top: .1rem;
  }

  .cnlist-title {
    font-weight: bold;
    font-size: .3rem;
  }

  .cnlist-title img {
    width: .3rem;
    height: .3rem;
  }

  /* 列表部分 */
  .cnlist-item {
    position: relative;
    overflow: hidden;
    padding: .2rem 0;

  }

  .item-img {
    float: left;
  }

  .item-img img {
    width: 2rem;
    height: 2rem;
  }

  .item-text {
    overflow: hidden;
    padding-left: .22rem;
  }

  .item-title {
    padding-top: .26rem;
    font-size: .32rem;
    color: #212121;
  }

  .item-message {
    padding-top: .22rem;
    font-size: .20rem;
    color: #616161;
  }

  .item-map {
    position: relative;
    padding-top: .30rem;
    color: #616161;
  }

  .item-map-price {
    font-size: .18rem;
    color: red;
  }

  .item-map-price b {
    font-size: .40rem;
    font-weight: normal;
  }

  .item-map-address {
    position: absolute;
    right: .2rem;
    bottom: 0;
  }
</style>