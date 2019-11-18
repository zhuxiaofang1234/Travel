<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1911/58/58502170165daf88a3.img.jpg_600x330_94e7d9e6.jpg"/>
      <div class="banner-info">
        <div class="banner-title">武汉欢乐谷(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe632;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs"
                    v-show="showGallary"
                    @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1805/af/af648beb7239c330a3.img.png_r_800x800_97675cd8.png',
        'http://img1.qunarzz.com/sight/p0/1904/47/479c814f9938a9b9a3.img.jpg_r_800x800_d36657c0.jpg',
        'http://img1.qunarzz.com/sight/p0/1807/49/49f59108ed03bc63a3.img.png_r_800x800_4d8d7595.png',
        'http://img1.qunarzz.com/sight/p0/1807/1a/1a4ab5ff1ab3d2dda3.img.png_r_800x800_d487628c.png',
        'http://img1.qunarzz.com/sight/p0/1807/31/31b3c9c82847318aa3.img.png_r_800x800_0837fb46.png',
        'http://img1.qunarzz.com/sight/p0/1806/74/74f2fd3a14231b58a3.img.jpg_r_800x800_4dc1fa06.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position:relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width:100%;
    .banner-info
      display:flex
      position: absolute
      left:0
      right:0
      bottom:0
      line-height: .6rem
      color: #fff
      text-align: left
      .banner-title
        flex:1
        padding:0 .2rem
        font-size: .32rem
      .banner-number
        line-height: .32rem
        margin-top:.14rem
        padding:0 .4rem
        height:.32rem
        border-radius:.2rem
        background :rgba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
