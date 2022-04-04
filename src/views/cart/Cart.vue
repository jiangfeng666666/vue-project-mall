<template>
 <div class="cart">
   <navBar class="nav-bar">
     <div slot="center">购物车({{length}})</div>
   </navBar>
   <cartList></cartList>
   <cartBottomBar></cartBottomBar>
 </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
import cartBottomBar from "@/views/cart/childComps/CartBottomBar";
import cartList from "@/views/cart/childComps/CartList";

import {mapGetters} from "vuex";

export default {
  name: "Cart",
  data(){
    return{
      message:"",
      isShow:false
    }
  },
  components:{
    navBar,
    cartList,
    cartBottomBar,
  },
  computed:{
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  }
}
</script>

<style scoped>
.nav-bar{
  background: var(--color-tint);
  color: white;
}

</style>