<template>
 <div class="container" @click="handleGallaryClick">
   <div class="wrapper">
     <swiper :options="swiperOption">
       <!-- slides -->
       <swiper-slide v-for="(item , index) of imgs" :key="index">
         <img class="swiper-img" :src="item"/>
       </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div><!--实际是swiper组件里的内容，不是当前组件-->
     </swiper>
   </div>
 </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: 'swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display:flex
    flex-direction:column
    justify-content:center
    z-index:99
    position:fixed
    width:100%
    top:0
    bottom:0
    background: #000
    .wrapper
      width: 100%
      height:0;
      padding-bottom:100%
      .swiper-img
        width:100%
      .swiper-pagination
        color: #fff
        bottom:-1rem
</style>
