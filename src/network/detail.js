import {request} from "@/network/request";
export function getDetail(iid){
    return request({
        url:'detail',
        params:{
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url:"/recommend"
    })
}
export class Goods{
    constructor(itemInfo,columns,services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discount
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}
export class Shop{
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.fans
        this.sells = shopInfo.sells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}