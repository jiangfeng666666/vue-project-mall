<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="tabControl1" v-show="!isTabFixed"></tabControl>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="tabControl2" v-show="isTabFixed"></tabControl>
      <goodsList :goods="goods[currentType].list"></goodsList>
    </scroll>
    <backTop @click.native="backClick" v-show="isShowBackTop"></backTop>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import recommendView from "@/views/home/childComps/RecommendView";
import featureView from "@/views/home/childComps/FeatureView";
import tabControl from "@/components/content/tabControl/TabControl";
import goodsList from "@/components/content/goods/GoodsList";
import scroll from "@/components/common/scroll/Scroll";
import backTop from "@/components/content/backTop/BackTop";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import {itemListenerMinin} from "@/common/mixin";


export default {
  name: "Home",
  mixins:[itemListenerMinin],
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:true,
      saveY:0,
    }
  },
  components: {
    navBar,
    HomeSwiper,
    recommendView,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backTop,
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.finishPullUp()
      })
    },
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop'
              break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = (-position.y)<this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  }

}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
}
.home-nav{
  background: var(--color-tint);
  color: #fff;
  /*position: fixed;*/
  /*top: 0;*/
  /*right: 0;*/
  /*left: 0;*/
  /*z-index: 10;*/
}
.tab-control{
  position: relative;
  z-index: 10;
  background: #fff;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0px;
  left: 0px;
}
</style>