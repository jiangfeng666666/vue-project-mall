<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
        <cartListItem v-for="item in cartList" :key="item.iid" :item-info="item">
        </cartListItem>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

import cartListItem from "@/views/cart/childComps/CartListItem";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    Scroll,
    cartListItem
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
      this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>