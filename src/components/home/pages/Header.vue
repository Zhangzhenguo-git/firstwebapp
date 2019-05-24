<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-search">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        北京<span class="iconfont">&#xe600;</span>
    </div>
  </div>
</template>
<script>

</script>


<style scoped>
 /* lang="stylus" */
/* @import '~@/assets/css/var.styl'; */

  .header{
    width: 100%;
    line-height:.88rem;
    /* background: $bgColor; */
    background: #00bdc4;
    /* color: $textColor; */
    color: #fff;
    font-size: .36rem;
    display:flex;
  }
  .header-left{
    width: .8rem;
    padding-left:0 .2rem;
    text-align: center;
    font-weight: bold;
}
  .header-search{
    flex: 1;
    background: #fff;
    color: #e4e7ea;
    text-align: left;
    margin: .15rem 0;
    font-size: .325rem;
    border-radius: .1rem;
    line-height: .6rem;
    padding-left: .1rem;
  }

.header-right{
  width: 1rem;
  padding:0 .2rem;
  font-size: .3rem;
}
</style>