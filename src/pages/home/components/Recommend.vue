<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg',
        title: '武汉欢乐谷',
        desc: '来试试中国最高的弹射过山车吧~'
      },
      {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/10/1012e4a2c398409c.water.jpg_200x200_366b12f8.jpg',
        title: '云雾山',
        desc: '来看漂亮的杜鹃花~'
      },
      {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/11a29c646d897af77648bc3d98949107.jpg_200x200_0b6014b8.jpg',
        title: '武汉九峰山森林动物园',
        desc: '与动物亲近，尽享自然风光秀色'
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
  .item
    overflow:hidden
    display:flex
    height:1.9rem
    text-align:left
    .item-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width:0
      .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height:.4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height:.44rem
        margin-top:.16rem
        background:#ff9300
        padding:0 .2rem
        border-radius:.06rem
        color:#fff
</style>
