<template>
  <div class="activity">
    <div class="activity-item border-right" v-for="(item,index) in activityDataList" :key="index">
      <img :src="item.imgUrl">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      activityDataList: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style type="text/css" scoped>
  .activity {
    width: 100%;
    height: 70px;
    display: flex;
    background: #ffffff;
    margin-top: .1rem;
    position: relative;
  }

  .activity .activity-item {
    flex: 1;
    height: 100%;

  }

  .activity .activity-item img {
    width: 100%;
    height: 100%;
  }
</style>