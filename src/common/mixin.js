export const itemListenerMinin = {
    data(){
        return{
            itemImgListener:null
        }
    },
    mounted() {
        this.itemImgListener = ()=>{
            this.$refs.scroll.refresh();
        }
        this.$bus.$on("itemImageLoad",this.itemImgListener)
    }
}