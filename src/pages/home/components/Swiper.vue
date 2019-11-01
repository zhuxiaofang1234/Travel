<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="(item , index) of list" :key="index">
        <img class="swiper-img" :src="item.imaUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div><!--实际是swiper组件里的内容，不是当前组件-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang ="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff !important
  .wrapper
    overflow hidden;
    width:100%;
    height:0;
    padding-bottom:26.67%
  .swiper-img
    width:100%
</style>
