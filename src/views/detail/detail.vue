<template>
<div id="detail">
  <detailNavBar class="detailNav" @titleClick="titleClick" ref="nav"></detailNavBar>
  <scroll class="DetailContent" ref="scroll" :probe-type="3" @scroll="contentScroll">
    <detailSwiper :top-images="topImages"></detailSwiper>
    <detailBaseInfo :goods="goods"></detailBaseInfo>
    <detail-shop-info :shop="shops"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
    <detailCommentInfo :commentInfo="commentInfo" ref="comment"></detailCommentInfo>
    <goods-list :goods="recommends" ref="recommend"></goods-list>
  </scroll>
  <detailBottomBar @addToCart="addToCart"></detailBottomBar>
  <toast></toast>
</div>
</template>

<script>
import detailNavBar from "@/views/detail/childComps/DetailNavBar";
import detailSwiper from "@/views/detail/childComps/DetailSwiper";
import detailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import detailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import detailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import detailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import detailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import goodsList from "@/components/content/goods/GoodsList";
import detailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import toast from "@/components/common/toast/Toast";
import scroll from "@/components/common/scroll/Scroll";
import {getDetail,getRecommend,Goods,Shop} from "@/network/detail";
import {itemListenerMinin} from "@/common/mixin";
import {mapActions} from "vuex";

export default {
  name: "detail",
  mixins:[itemListenerMinin],
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shops:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,

    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      const data = res.result
      this.topImages = data.itemInfo.topImages
      console.log(data)
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shops = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo.sizes = data.itemParams.rule.tables
      this.paramInfo.infos = data.itemParams.info.set
      this.paramInfo.image = data.itemParams.info.images ? data.itemParams.info.images[0]:''
      this.commentInfo = data.rate.list[0]
    })
    getRecommend().then(res=>{
      this.recommends = res.data.list
      console.log(res)
    })
    this.getThemeTopY = ()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    }
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off("itemImageLoad",this.itemImgListener)
  },
  methods:{
    ...mapActions(['addCart']),
    imageLoad(){
        this.$refs.scroll.refresh()
        this.getThemeTopY();
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position){
      let positionY = - position.y
      for (let i = 0;i<this.themeTopYs.length-1;i++){
        if(this.currentIndex!=i&&(positionY>=this.themeTopYs[i]) && positionY < this.themeTopYs[i+1]){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addToCart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // this.$store.dispatch('addCart',product)
      this.addCart(product).then(res=>{
        this.$toast.show(res)
      })
    }
  },
  components:{
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    goodsList,
    detailBottomBar,
    toast,
    scroll,
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 1111;
  background: #fff;
  height: 100vh;
}
.detailNav{
  position: relative;
  z-index: 9999;
  background: #fff;
}
.DetailContent{
  position: absolute;
  top:44px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

</style>