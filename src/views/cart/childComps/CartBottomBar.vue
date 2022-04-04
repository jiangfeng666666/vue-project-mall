<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton
        class="check-button" :isChecked="isSelectAll" @click.native="checkClick"
      ></CheckButton>
      <span>全选</span>
    </div>
    <div class="price">合计 : {{ totalPrice }}</div>
    <div class="calculate" @click="calcClick" >去计算 ({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  data(){
    return{
    }
  },
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    // 合计
      checkLength() {
      return this.cartList.filter(item=>{
        return item.checked
      }).length
    },
    // 去计算
    totalPrice() {
      return "￥"+this.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    isSelectAll(){
      if (this.cartList.length==0){
        return false
      }
      return !this.cartList.find(item=>{
        return item.checked == false
      })
      }

  },
  methods: {
    checkClick(){
      if(this.isSelectAll){
        this.cartList.forEach(item=>{
          item.checked = false
        })
      }else{
        this.cartList.forEach(item=>{
          item.checked = true
        })
      }
    },
    calcClick(){
      if(this.checkLength == 0){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  }

};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  background-color: #eee;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  line-height: 40px;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 150px;
  color: #fff;
  background-color: red;
  text-align: center;
}
</style>
