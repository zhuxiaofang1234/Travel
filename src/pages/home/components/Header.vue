<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont search-icon">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right"><span class="city">城市</span><span class="iconfont arrow-icon">&#xe600;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex
    line-height:.86rem
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
      width:1.24rem
      float:right
      font-size:0
      text-align:center
      .arrow-icon
        font-size:.24rem
        margin-left:0.06rem
      .city
        font-size:.24rem
</style>
