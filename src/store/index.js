import vue from "vue"
import vuex from "vuex";
vue.use(vuex)
export default new vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
       addCounter(state,payload){
           payload.count++
       },
       addToCart(state,payload){
           payload.checked = true
           state.cartList.push(payload)
       },
       editCheckStatus(state,payload){
           let editItem = state.cartList.find(item=>item.iid===payload.iid)
           editItem.checked = !editItem.checked

       }
    },
    actions:{
        addCart(context,payload){
            return new Promise((reslove,reject)=>{
                let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)
                if(oldProduct){
                    context.commit('addCounter',oldProduct)
                    reslove('当前的商品数量+1')
                }else{
                    payload.count = 1
                    context.commit('addToCart',payload)
                    reslove('添加了新的商品')
                }
            })

        }
    },
    getters:{
        cartLength(state){
            return state.cartList.length
        },
        cartList(state){
            return state.cartList
        }
    }
})