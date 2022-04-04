<template>
 <div class="wrapper">
   <ul class="content">
     <ul>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
     </ul>
     <ul>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
     </ul>
     <ul>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
     </ul>
   </ul>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  mounted() {
    new BScroll(document.querySelector(".wrapper"))
  }
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background: palegoldenrod;
  overflow: hidden;
}
</style>