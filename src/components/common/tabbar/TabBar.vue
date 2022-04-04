<template>
 <div id="tab-bar">
   <slot></slot>
 </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "TabBar",
  components:{
    TabBarItem,
  }
}
</script>

<style scoped>
 #tab-bar{
   display: flex;
   background: #f6f6f6;
   box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 100;
 }
</style>