<template>
  <div class="good">
    <goodsListItem v-for="(item,index) in goods" :key="index" :goods-item="item"></goodsListItem>
  </div>

</template>

<script>
import goodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    goodsListItem
  }
}
</script>

<style scoped>
.good{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>