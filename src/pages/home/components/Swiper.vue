<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item , index) of swiperList" :key="index">
        <img class="swiper-img" :src="item.imaUrl"/>
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
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imaUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/e09bcf3ce7fda2b091b8cc8de80dceca.jpg_750x200_c144ffc3.jpg'
      },
      {
        id: '0002',
        imaUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg'
      },
      {
        id: '0003',
        imaUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/8254351bdfba7389f5a4de4416b9d4f4.png_750x200_843e98ad.png'
      }
      ]
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
