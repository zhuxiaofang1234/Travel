<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont search-icon">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        <span class="city">{{this.city}}</span>
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex
    line-height: $headerHeight
    background:$bgColor
    color:#fff
    .header-left
      width:.64rem
      float:left
      .back-icon
        text-align:center
        font-size:.4rem
    .header-input
      flex:1
      height:.64rem
      line-height:.64rem
      margin-top:.12rem
      margin-left:.2rem
      padding-left:.2rem
      background:#fff
      border-radius:.1rem
      color:#ccc
      text-align:left
      .search-icon
        padding-right:.1rem
    .header-right
      min-width:1.04rem
      padding:0 .1rem
      float:right
      font-size:0
      text-align:center
      color:#fff
      .arrow-icon
        font-size:.28rem
        margin-left:0.06rem
      .city
        font-size:.28rem
</style>
