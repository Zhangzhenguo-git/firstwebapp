<template>
  <div class="hot">
    <div class="hot-top">
      <img :src="hotimg">
      <span class="hot-top-title-left">本周热门榜单</span>
      <span class="hot-top-title-right">全部榜单 ></span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="(item,index) in hotlist">
        <img :src="item.imgUrl">
        <p>{{item.title}}</p>
        <p>
          <span class="hot-mark">{{item.price}}</span>起
        </p>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {


      };
    },
    props: {
      hotlist: {
        type: Array,
        required: true
      },
      hotimg: {
        type: String,
        required: true
      },
    }
  };
</script>
<style scoped >


  .hot {
    background: #ffffff;
    margin-top: 0.1rem;
    font-size: 0.23rem;
  }

  .hot-top {
    padding: 0.2rem;
    position: relative;
  }

  .hot-top img {
    width: 0.3rem;
    height: 0.3rem;
  }

  .hot-top-title-left {
    font-size: 0.3rem;
    color: #000;
    font-weight: bold;
  }

  .hot-top-title-right {
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    text-align: center;
  }

  /* 图文介绍 */
  .hot-list {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 3rem;
  }

  .hot-item {
    margin-top: 0.1rem;
    width: 2rem;
    height: 2rem;
    padding: 0 0.05rem;
    text-align: center;
    display: inline-block;
  }

  .hot-item img {
    width: 100%;
    height: 100%;
  }

  .hot-item p {
    margin-top: 0.1rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .hot-list {
    margin-top: 0.1rem;
    font-size: 0.26rem;
  }

  .hot-item .hot-mark {
    color: #ff8300;
  }
</style>