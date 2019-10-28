<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/84/96e0a5830d7c99.jpg_r_640x214_ee164725.jpg',
        title: '江城山水',
        desc: '北枕巍巍大别山，南瀕浩浩长江水，江城内外，还隐藏的诸多山水。'
      },
      {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
        title: '武汉必打卡',
        desc: '到武汉感受神奇的热干面之都。'
      },
      {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
        title: '三峡人家',
        desc: '感受长江的水三峡的情怀，自古至今，无数骚人墨客浓墨重彩的描绘三峡，赶紧领略三峡的壮美吧！'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height:.8rem
    background: #eee
    text-indent: .2rem
    text-align: left
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.4375%
  .item-img
    width:100%
  .item-info
    padding: .14rem .2rem .2rem .2rem;
    text-align:left
    .item-title
      line-height:.54rem
      font-size: .28rem;
      ellipsis()
    .item-desc
      color: #616161;
      font-size: .24rem;
      ellipsis()
</style>
