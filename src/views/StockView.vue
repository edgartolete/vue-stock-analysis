<template>

<tr :class="{
'bg-green-50' : props.rating == 'good',
'bg-red-50': props.rating == 'bad',
}">
    <td class=" p-1 border-solid border border-slate-300">{{ lastUpdate }}</td>
    <td class=" p-1 border-solid border border-slate-300 font-bold">{{ props.stockName }}</td>
    <td class=" p-1 border-solid border border-slate-300" >{{ stock.peTtm }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ marketPrice.toFixed(2) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ returnFVComputation(props.compMethod) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText((returnFVComputation(props.compMethod) - marketPrice) / marketPrice) }}</td> 
    
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(revenue3yrAnnAveGroRate) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(revenue5yrAnnAveGroRate) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(netIncome3yrAnnAveGroRate) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(netIncome5yrAnnAveGroRate) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(totalEquity3yrAnnAveGroRate) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(totalEquity5yrAnnAveGroRate) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(totalAssets3yrAnnAveGroRate) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(totalAssets5yrAnnAveGroRate) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(netProfitMargin3yr) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(netProfitMargin5yr) }}</td>
    
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(returnOnEquity3yr) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(returnOnEquity5yr) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(returnOnAssets3yr) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(returnOnAssets5yr) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(returnOnInvestedCapital3yr) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(returnOnInvestedCapital5yr) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ debtToEquityRatio3yr.toFixed(2) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ debtToEquityRatio5yr.toFixed(2) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ debtToAssetsRatio3yr.toFixed(2) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ debtToAssetsRatio5yr.toFixed(2) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ debtToCapitalRatio3yr.toFixed(2) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ debtToCapitalRatio5yr.toFixed(2) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ currentRatio3yr.toFixed(2) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ currentRatio5yr.toFixed(2) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ cashFlowtoTotalDebtRatio3yr.toFixed(2) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ cashFlowtoTotalDebtRatio5yr.toFixed(2) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ freeCashFlow3yr.toFixed(2) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ freeCashFlow5yr.toFixed(2) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ dividendYield3yr.toFixed(2) + "%" }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ dividendYield5yr.toFixed(2) + "%" }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(payoutRatio3yr) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ getPercentText(payoutRatio5yr) }}</td>

    <td class=" p-1 border-solid border border-slate-300">{{ sharesDilution3yr.toFixed(2) }}</td>
    <td class=" p-1 border-solid border border-slate-300">{{ sharesDilution5yr.toFixed(2) }}</td>
</tr>

</template>

<script setup>
import { useStockData } from "@/stores/stockData";
import { ref } from "vue";

let stockData = useStockData();

const props = defineProps({ stockName: String, compMethod: String, rating: {type: String, default: "unsure"} })

let stock = []; //get all stock data
let reports = ref([]); // annual reports

let lastUpdate = ref("");

let revenueAnnAveGroRate = ref([]);
let revenue3yrAnnAveGroRate = ref(0) 
let revenue5yrAnnAveGroRate = ref(0) 

let netIncomeAveGroRate = ref([]);
let netIncome3yrAnnAveGroRate = ref(0)
let netIncome5yrAnnAveGroRate = ref(0) 

let totalEquityAveGroRate = ref([]);
let totalEquity3yrAnnAveGroRate = ref(0) 
let totalEquity5yrAnnAveGroRate = ref(0) 

let totalAssetsAveGroRate = ref([]);
let totalAssets3yrAnnAveGroRate = ref(0) 
let totalAssets5yrAnnAveGroRate = ref(0) 

let growthRate5yr = ref(0);

let annNetProfitMargin = ref([])
let netProfitMargin3yr = ref(0)
let netProfitMargin5yr = ref(0)

let annReturnOnEquity = ref([])
let returnOnEquity3yr = ref(0)
let returnOnEquity5yr = ref(0)

let annReturnOnAssets = ref([])
let returnOnAssets3yr = ref(0)
let returnOnAssets5yr = ref(0)

let AnnReturnOnInvestedCapital = ref([])
let returnOnInvestedCapital3yr = ref(0)
let returnOnInvestedCapital5yr = ref(0)

let annDebtToEquityRatio = ref([])
let debtToEquityRatio3yr = ref(0)
let debtToEquityRatio5yr = ref(0)

let annDebtToAssetsRatio = ref([])
let debtToAssetsRatio3yr = ref(0)
let debtToAssetsRatio5yr = ref(0)

let annDebtToCapitalRatio = ref([])
let debtToCapitalRatio3yr = ref(0)
let debtToCapitalRatio5yr = ref(0)

let annCurrentRatio = ref([])
let currentRatio3yr = ref(0)
let currentRatio5yr = ref(0)

let annCashFlowtoTotalDebtRatio = ref([])
let cashFlowtoTotalDebtRatio3yr = ref(0)
let cashFlowtoTotalDebtRatio5yr = ref(0)

let annFreeCashFlow = ref([])
let freeCashFlow3yr = ref(0)
let freeCashFlow5yr = ref(0)

let annDividendYield = ref([])
let dividendYield3yr = ref(0)
let dividendYield5yr = ref(0)

let annPayoutRatio = ref([])
let payoutRatio3yr = ref(0)
let payoutRatio5yr = ref(0)

let sharesDilution3yr = ref(0)
let sharesDilution5yr = ref(0)

let marketPrice = 0

let roe5YrAve = ref(0);
let peRatio5YrHigh = 0;
let peRatio5YrLow = 100;


//Fair Values
let standardComp = ref(0)
let grahamOldFV = ref(0);
let grahamNewFV = ref(0);

function getPercentText(val){
    return ((val * 100).toFixed(2)) + " %";
}

//function to return the intrinsic value calculation based on the method specified on the props
function returnFVComputation (compMethod) {
    switch (compMethod) {
        case "standard": {
            return standardComp.value.toFixed(2)
            break;
        }
        case "grahamOldFV": {
            return grahamOldFV.value.toFixed(2)
            break;
        }
        case "grahamNewFV": {
            return grahamNewFV.value.toFixed(2)
            break;
        }
    }
}   


//function to get the data of this stock including the annual reports, intrinsic values
function fetchStockData(code) {
    const url = "./src/stocks/" + code.toLowerCase() + ".json";
    fetch(url)
        .then(res => res.json())
        .then(data => stock = data)
        .then(data => reports.value = data.reports)
        .then(() => lastUpdate.value = stock.lastUpdate)
        .then(() => {
            //get the PE ratio 5 year high and low
            for(var i = 0; i < 5; i++){
                peRatio5YrHigh = (peRatio5YrHigh < reports.value[i].priceToEarningsRatio) ? reports.value[i].priceToEarningsRatio : peRatio5YrHigh
                peRatio5YrLow = (peRatio5YrLow > reports.value[i].priceToEarningsRatio) ? reports.value[i].priceToEarningsRatio : peRatio5YrLow
            }
        })
        .then(()=>{
            //get the Annual average growth rate and 5 year average annual growth rate
            for (var i = 0; i < reports.value.length - 1; i++) {
                revenueAnnAveGroRate[i] = (reports.value[i].revenue - reports.value[i + 1].revenue) / reports.value[i + 1].revenue
                netIncomeAveGroRate[i] = (reports.value[i].netIncome - reports.value[i + 1].netIncome) / reports.value[i + 1].netIncome
                totalEquityAveGroRate[i] = (reports.value[i].totalEquity - reports.value[i + 1].totalEquity) / reports.value[i + 1].totalEquity
                totalAssetsAveGroRate[i] = (reports.value[i].totalAssets - reports.value[i + 1].totalAssets) / reports.value[i + 1].totalAssets
                if (i < 5) {
                    revenue5yrAnnAveGroRate.value += revenueAnnAveGroRate[i];
                    netIncome5yrAnnAveGroRate.value += netIncomeAveGroRate[i];
                    totalEquity5yrAnnAveGroRate.value += totalEquityAveGroRate[i];
                    totalAssets5yrAnnAveGroRate.value += totalAssetsAveGroRate[i];
                }
                if(i < 3){
                    revenue3yrAnnAveGroRate.value += revenueAnnAveGroRate[i];
                    netIncome3yrAnnAveGroRate.value += netIncomeAveGroRate[i];
                    totalEquity3yrAnnAveGroRate.value += totalEquityAveGroRate[i];
                    totalAssets3yrAnnAveGroRate.value += totalAssetsAveGroRate[i];
                }
                
            }
            revenue3yrAnnAveGroRate.value = revenue3yrAnnAveGroRate.value / 3
            revenue5yrAnnAveGroRate.value = revenue5yrAnnAveGroRate.value / 5

            netIncome3yrAnnAveGroRate.value = netIncome3yrAnnAveGroRate.value / 3
            netIncome5yrAnnAveGroRate.value = netIncome5yrAnnAveGroRate.value / 5

            totalEquity3yrAnnAveGroRate.value = totalEquity3yrAnnAveGroRate.value / 3
            totalEquity5yrAnnAveGroRate.value = totalEquity5yrAnnAveGroRate.value / 5
            
            totalAssets3yrAnnAveGroRate.value = totalAssets3yrAnnAveGroRate.value / 3
            totalAssets5yrAnnAveGroRate.value = totalAssets5yrAnnAveGroRate.value / 5

            growthRate5yr.value = (revenue5yrAnnAveGroRate.value + netIncome5yrAnnAveGroRate.value + totalEquity5yrAnnAveGroRate.value + totalAssets5yrAnnAveGroRate.value) / 4
         })
        .then(() =>{
            //calculate net profit margin
            for (var i = 0; i < reports.value.length - 1; i++) {
                annNetProfitMargin[i] = reports.value[i].netIncome / reports.value[i].revenue
                annReturnOnEquity[i] = reports.value[i].netIncome / reports.value[i].totalEquity
                annReturnOnAssets[i] = reports.value[i].netIncome / reports.value[i].totalAssets
                AnnReturnOnInvestedCapital[i] = reports.value[i].netIncomeBeforeTaxes / (reports.value[i].totalEquity + reports.value[i].totalDebt + reports.value[i].capitalLeaseObligations)
                annDebtToEquityRatio[i] = reports.value[i].totalLiabilities / reports.value[i].totalEquity
                annDebtToAssetsRatio[i] = reports.value[i].totalLiabilities / reports.value[i].totalAssets
                annDebtToCapitalRatio[i] = reports.value[i].totalLiabilities / (reports.value[i].totalLiabilities + reports.value[i].totalEquity)
                annCurrentRatio[i] = reports.value[i].totalCurrentAssets / reports.value[i].totalCurrentLiabilities
                annCashFlowtoTotalDebtRatio[i] = reports.value[i].cashFlow / reports.value[i].totalDebt
                annFreeCashFlow[i] = reports.value[i].freeCashFlow
                annDividendYield[i] = reports.value[i].dividendYield
                annPayoutRatio[i] = reports.value[i].dividendPayout
                if (i < 5) {
                    //get the 5 year annual average
                    netProfitMargin5yr.value += annNetProfitMargin[i];
                    returnOnEquity5yr.value += annReturnOnEquity[i];
                    returnOnAssets5yr.value += annReturnOnAssets[i];
                    returnOnInvestedCapital5yr.value += AnnReturnOnInvestedCapital[i];
                    debtToEquityRatio5yr.value += annDebtToEquityRatio[i];
                    debtToAssetsRatio5yr.value += annDebtToAssetsRatio[i];
                    debtToCapitalRatio5yr.value += annDebtToCapitalRatio[i];
                    currentRatio5yr.value += annCurrentRatio[i];
                    cashFlowtoTotalDebtRatio5yr.value += annCashFlowtoTotalDebtRatio[i];
                    freeCashFlow5yr.value += annFreeCashFlow[i]
                    dividendYield5yr.value += annDividendYield[i]
                    payoutRatio5yr.value += annPayoutRatio[i]
                }
                if(i < 3){
                    netProfitMargin3yr.value += annNetProfitMargin[i];
                    returnOnEquity3yr.value += annReturnOnEquity[i];
                    returnOnAssets3yr.value += annReturnOnAssets[i];
                    returnOnInvestedCapital3yr.value += AnnReturnOnInvestedCapital[i];
                    debtToEquityRatio3yr.value += annDebtToEquityRatio[i];
                    debtToAssetsRatio3yr.value += annDebtToAssetsRatio[i];
                    debtToCapitalRatio3yr.value += annDebtToCapitalRatio[i];
                    currentRatio3yr.value += annCurrentRatio[i];
                    cashFlowtoTotalDebtRatio3yr.value += annCashFlowtoTotalDebtRatio[i];
                    freeCashFlow3yr.value += annFreeCashFlow[i]
                    dividendYield3yr.value += annDividendYield[i]
                    payoutRatio3yr.value += annPayoutRatio[i]
                }
            }
            netProfitMargin3yr.value = netProfitMargin3yr.value / 3
            netProfitMargin5yr.value = netProfitMargin5yr.value / 5

            returnOnEquity3yr.value = returnOnEquity3yr.value / 3
            returnOnEquity5yr.value = returnOnEquity5yr.value / 5

            returnOnAssets3yr.value = returnOnAssets3yr.value / 3 
            returnOnAssets5yr.value = returnOnAssets5yr.value / 5 

            returnOnInvestedCapital3yr.value = returnOnInvestedCapital3yr.value / 3 
            returnOnInvestedCapital5yr.value = returnOnInvestedCapital5yr.value / 5 

            debtToEquityRatio3yr.value = debtToEquityRatio3yr.value / 3
            debtToEquityRatio5yr.value = debtToEquityRatio5yr.value / 5 

            debtToAssetsRatio3yr.value = debtToAssetsRatio3yr.value / 3 
            debtToAssetsRatio5yr.value = debtToAssetsRatio5yr.value / 5 

            debtToCapitalRatio3yr.value = debtToCapitalRatio3yr.value / 3 
            debtToCapitalRatio5yr.value = debtToCapitalRatio5yr.value / 5 

            currentRatio3yr.value = currentRatio3yr.value / 3
            currentRatio5yr.value = currentRatio5yr.value / 5

            cashFlowtoTotalDebtRatio3yr.value = cashFlowtoTotalDebtRatio3yr.value / 3 
            cashFlowtoTotalDebtRatio5yr.value = cashFlowtoTotalDebtRatio5yr.value / 5 
            
            freeCashFlow3yr.value = freeCashFlow3yr.value / 3
            freeCashFlow5yr.value = freeCashFlow5yr.value /5

            dividendYield3yr.value = dividendYield3yr.value / 3
            dividendYield5yr.value = dividendYield5yr.value / 5

            payoutRatio3yr.value = payoutRatio3yr.value / 3
            payoutRatio5yr.value = payoutRatio5yr.value / 5
        })
        .then(() =>{
            sharesDilution3yr.value = reports.value[0].outstandingShares - reports.value[2].outstandingShares
            sharesDilution5yr.value = reports.value[0].outstandingShares - reports.value[4].outstandingShares
        })
        .then(() => {
            //get the FV using the standard method
            standardComp.value = (stock.epsTtm * (Math.pow(1 + returnOnEquity5yr.value , 10)) * ((peRatio5YrHigh + peRatio5YrLow) / 2)) / (1.1) ** 10

        })
        .then(() => {
            //get the FV using Graham old method
            grahamOldFV.value = Math.sqrt(22.5 * stock.epsTtm * stock.bvpsAnnual)
        })
        .then(() => {
            //get the FV using Graham new method
            grahamNewFV.value = (stock.epsTtm * (8.5 + 2 * growthRate5yr.value) * 4.4) / stockData.phpBondYield;
        })
}
fetchStockData(props.stockName)

//get the market price for this specific stock
marketPrice = await stockData.fetchMarketPrice(props.stockName)




</script>
