<template>
  <div class="app-home">
    <home-header></home-header>

    <home-swiper v-bind:swiperimgList="swiperimgList">
    </home-swiper>

    <home-icons v-bind:iconsList="iconsList">
    </home-icons>

    <home-location></home-location>

    <home-activity v-bind:activityDataList="activityDataList">
    </home-activity>

    <home-hot v-bind:hotlist="hotlist" v-bind:hotimg="hotimg"></home-hot>

    <home-cnlist v-bind:productDatas="productDatas" v-bind:productimg="productimg">
    </home-cnlist>

  </div>
</template>
<script>
  import HomeHeader from '../home/pages/Header'
  import HomeSwiper from '../home/pages/Swiper'
  import HomeIcons from '../home/pages/Icons'
  import HomeLocation from '../home/pages/Location'
  import HomeActivity from '../home/pages/Activity'
  import HomeHot from '../home/pages/Hot'
  import HomeCnlist from '../home/pages/Cnlist'

  export default{
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeLocation,
      HomeActivity,
      HomeHot,
      HomeCnlist
    },
    data () {
      return {
        swiperimgList:[],
        iconsList:[],
        activityDataList:[],
        hotlist:[],
        hotimg:"",
        productDatas:[],
        productimg:""
      }
    },
    mounted () {
      this.$http.get("/apis/dataHome.json")
      .then((res)=>{
        console.log(res);
        const result=res.data.data[0];


        this.swiperimgList=result.swiperimgList;

        this.iconsList=result.iconsList;

        this.activityDataList=result.activityDataList;

        this.hotimg=result.hotimg;
        this.hotlist=result.hotlist;

        this.productDatas=result.productDatas;
        this.productimg=result.productimg;
      })
    }
  }


</script>

<style type="text/css" scoped>
.app-home{
  width: 100%;
  background: #e0e0e0;
  overflow: hidden;
}
</style>