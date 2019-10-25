<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/e09bcf3ce7fda2b091b8cc8de80dceca.jpg_750x200_c144ffc3.jpg"/>
      </swiper-slide>
      <swiper-slide><!--375*100-->
        <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/8254351bdfba7389f5a4de4416b9d4f4.png_750x200_843e98ad.png"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div><!--实际是swiper组件里的内容，不是当前组件-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
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
