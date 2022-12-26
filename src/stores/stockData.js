import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStockData = defineStore('stockData', () => {

    let phpBondYield = 6.968;
    let priceAUB = 39.70;
    let market = [];
    let marketPrice = [];


    async function fetchMarketPrice(code){ 
        if(code == "AUB"){
            return priceAUB
        }else if(market.length == 0){
            const url = "https://phisix-api4.appspot.com/stocks.json";
            let response = await fetch(url)
            let data = await response.json()
            market = await data["stock"] ;
            marketPrice = await market.filter(obj => obj.symbol == code.toUpperCase())
            marketPrice = await marketPrice.map((item) => {
                return item["price"].amount;
            })
            marketPrice = await marketPrice[0];
            return await marketPrice;
        }else{
            marketPrice = market.filter(obj => obj.symbol == code.toUpperCase())
            marketPrice = marketPrice.map((item) => {
                return item["price"].amount;
            })
            marketPrice = marketPrice[0];
            return marketPrice;
        }
    }



    return { phpBondYield, fetchMarketPrice, market}
})

