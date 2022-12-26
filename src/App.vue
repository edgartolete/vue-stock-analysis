

<template>
    <div class="container">
<table class="table w-max table-fixed overflow-scroll text-center">
    <thead>
        <tr class=" bg-red-600 text-white">
            <th class="w-32 border p-2 bg-slate-500">Last Update</th>
            <th class="w-32 border p-2">Stock Code</th>
            <th class="w-32 border py-2">P/E (TTM)</th>
            <th class="w-32 border py-2">Market Price</th>
            <th class="w-32 border py-2">Fair Value</th> 
            <th class="w-32 border py-2">Potential</th>

            <th class="w-38 border p-2  bg-lime-600">Revenue<br>3yr AAGR</th>
            <th class="w-38 border p-2  bg-lime-700">Revenue<br>5yr AAGR</th>

            <th class="w-38 border p-2  bg-lime-600">Net Income<br>3yr AAGR</th>
            <th class="w-38 border p-2  bg-lime-700">Net Income<br>5yr AAGR</th>

            <th class="w-38 border p-2  bg-lime-600">Total Equity<br>3yr AAGR</th>
            <th class="w-38 border p-2  bg-lime-700">Total Equity<br>5yr AAGR</th>

            <th class="w-38 border p-2  bg-lime-600" >Total Assets<br>3yr AAGR</th>
            <th class="w-38 border p-2  bg-lime-700">Total Assets<br>5yr AAGR</th>

            <th class="w-38 border p-2  bg-sky-600">Net Profit %<br>3yr Average</th>
            <th class="w-38 border p-2  bg-sky-700">Net Profit %<br>5yr Average</th>

            <th class="w-38 border p-2  bg-sky-600">(ROE)<br>3yr Average</th>
            <th class="w-38 border p-2  bg-sky-700">(ROE)<br>5yr Average</th>

            <th class="w-38 border p-2  bg-sky-600">(ROA)<br>3yr Average</th>
            <th class="w-38 border p-2  bg-sky-700">(ROA)<br>5yr Average</th>

            <th class="w-38 border p-2  bg-sky-600" @click="defineReturnOnInvestedCapital">(ROIC)<br>3yr Average</th>
            <th class="w-38 border p-2  bg-sky-700" @click="defineReturnOnInvestedCapital">(ROIC)<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600">(D/E)<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700">(D/E)<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600">(D/A)<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700">(D/A)<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600">(D/C)<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700">(D/C)<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600">Current Ratio<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700">Current Ratio<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600">CF /Total Debt<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700">CF /Total Debt<br>5yr Average</th>

            <th class="w-32 border py-2  bg-amber-600">Free Cash Flow<br>3yr Average</th>
            <th class="w-32 border py-2  bg-amber-700">Free Cash Flow<br>5yr Average</th>

            <th class="w-32 border py-2  bg-amber-600">Dividend Yield<br>3yr Average</th>
            <th class="w-32 border py-2  bg-amber-700">Dividend Yield<br>5yr Average</th>

            <th class="w-32 border py-2  bg-amber-600">Payout Ratio<br>3yr Average</th>
            <th class="w-32 border py-2  bg-amber-700">Payout Ratio<br>5yr Average</th>

            <th class="w-32 border py-2  bg-amber-600">Shares <br>3yr Changes</th>
            <th class="w-32 border py-2  bg-amber-700">Shares <br>5yr Changes</th>
        </tr>
    </thead>
    <tbody>
<Suspense><StockView stockName="DMC" compMethod="grahamNewFV" rating="good"></StockView></Suspense>
<Suspense><StockView stockName="LTG" compMethod="grahamNewFV" rating="good"></StockView></Suspense>
<Suspense><StockView stockName="GMA7" compMethod="grahamOldFV" rating="good" ></StockView></Suspense>
<Suspense><StockView stockName="SPC" compMethod="grahamOldFV"></StockView></Suspense>
<Suspense><StockView stockName="AUB" compMethod="grahamNewFV" rating="good"></StockView></Suspense>
<Suspense><StockView stockName="EW" compMethod="grahamNewFV" ></StockView></Suspense>
<Suspense><StockView stockName="SCC" compMethod="grahamOldFV" ></StockView></Suspense>
</tbody>
</table>

    </div>
</template>


<script>
import StockView from "./views/StockView.vue";

export default {
    components:{
        StockView
    },
    methods: {
        defineReturnOnInvestedCapital() {
                this.$swal('What Is Return on Invested Capital (ROIC)?',
                    'Return on invested capital (ROIC) is a calculation used to assess a company\'s efficiency in allocating capital to profitable investments.The ROIC formula involves dividing net operating profit after tax(NOPAT) by invested capital.<br><br>The return on invested capital can be used as a benchmark to calculate the value of other companies');
        },
    },
};



</script>



<style scoped>


</style>
