<template>
  <div class="icons">
    <swiper :options="swiperOption" class="swiper-s">
      <!-- slides -->
      <swiper-slide v-for="(pageItem,index) in page" :key="index">
        <div class="icon-item" v-for="item in pageItem">
          <img :src="item.iconUrl">
          <p>{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>



  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        swiperOption: {
          loop: true,
        },
      }
    },
    // props: ['iconsList'],
    props:{
      iconsList:{
        type:Array,
        required:true
      }
    },
    computed: {
      page() {
        //首先创建一个空数组，来存储数据
        let pages = [];
        //然后对json数据进行foreach循环分组
        this.iconsList.forEach((item, index) => {
          //创建一个变量，来接收集合向下取整
          let idx = Math.floor(index / 8);
          console.log("向下取整为：" + idx);
          if (!pages[idx]) {
            pages[idx] = [];
          }
          pages[idx].push(item);
        })
        return pages;
      }
    }
  }
</script>
<style scoped>
  /* lang="stylus" */
  /* @import '~@/assets/css/common.styl'; */
  .icons {
    width: 100%;
    height: 3.7rem;
    background: #ffffff;
  }

  .icon-item {
    width: 25%;
    height: 100%;
    float: left;
    text-align: center;
  }

  .icon-item img {
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
  }

  .icon-item p {
    margin-top: .1rem;
    color: #000000;
    font-size: .28rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    /* textOverflow(); */
  }
</style>