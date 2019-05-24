<template>
  <div class="header-swiper">
    <swiper :options="swiperOption" class="swiper-s">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperimgList" :key="index">
        <img :src="item.name">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
        }
      }
    },
    props: ['swiperimgList'],
    // props: {
    //   swiperimgList:{
    //     type:Array,
    //     required:true
    //   }
    // },
  }
</script>
<style type="text/css" scoped>
  .swiper-s {
    width: 100%;
    height: 2.125rem;
    background: #f0f0f0;
  }

  .swiper-s .img {
    width: 100%;
    height: 100%;
  }

  .swiper-s>>>.swiper-pagination-bullet-active {
    background: #fff;
  }

  .swiper-pagination-bullet {
    background: #f0f0f0;
  }
</style>