

<template>
    <div class="container">
<table class="table w-max table-fixed overflow-scroll text-center">
    <thead>
        <tr class=" bg-red-600 text-white">
            <th class="w-32 border p-2 bg-slate-500">Last Update</th>
            <th class="w-32 border p-2">Stock Code</th>
            <th class="w-32 border p-2">Sector</th>
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

            <th class="w-38 border p-2  bg-sky-600" @click="defineRetOnCap">(ROIC)<br>3yr Average</th>
            <th class="w-38 border p-2  bg-sky-700" @click="defineRetOnCap">(ROIC)<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600" @click="defineDebtToEquity">(D/E)<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700" @click="defineDebtToEquity">(D/E)<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600" @click="defineDebtToAssets">(D/A)<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700" @click="defineDebtToAssets">(D/A)<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600">(D/C)<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700">(D/C)<br>5yr Average</th>

            <th class="w-32 border py-2  bg-purple-600" @click="defineCurrentRatio">Current Ratio<br>3yr Average</th>
            <th class="w-32 border py-2  bg-purple-700" @click="defineCurrentRatio">Current Ratio<br>5yr Average</th>

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
<Suspense><StockView stockName="LTG" sector="Holding" compMethod="grahamNewFV" rating=""></StockView></Suspense>
<Suspense><StockView stockName="SPC" sector="Power/Water" compMethod="grahamOldFV"></StockView></Suspense>
<Suspense><StockView stockName="DMC" sector="Holding" compMethod="grahamNewFV" rating="good"></StockView></Suspense>
<Suspense><StockView stockName="SCC" sector="Mining/Oil" compMethod="grahamOldFV" rating=""></StockView></Suspense>
<Suspense><StockView stockName="GMA7" sector="Media" compMethod="grahamOldFV" rating="" ></StockView></Suspense>
<Suspense><StockView stockName="MER" sector="Power/Water"  compMethod="grahamOldFV" rating=""></StockView></Suspense>
<Suspense><StockView stockName="AUB" sector="Bank"  compMethod="grahamNewFV" rating=""></StockView></Suspense>
<Suspense><StockView stockName="EW" sector="Bank" compMethod="grahamNewFV" rating=""></StockView></Suspense>
<Suspense><StockView stockName="FPH" sector="Power/Water" compMethod="standard" rating=""></StockView></Suspense>

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
        defineRetOnCap() {
                this.$swal('What Is Return on Invested Capital (ROIC)?',
                    'Return on invested capital (ROIC) is a calculation used to assess a company\'s efficiency in allocating capital to profitable investments.The ROIC formula involves dividing net operating profit after tax(NOPAT) by invested capital.<br><br>The return on invested capital can be used as a benchmark to calculate the value of other companies<br><br> Preferably 6% above for all');
        },
        defineDebtToEquity(){
            this.$swal('What Is Debt-to-Equity (D/E) Ratio?',
                'Debt-to-equity (D/E) ratio compares a company\’s total liabilities with its shareholder equity and can be used to assess the extent of its reliance on debt.<br><br>D/E ratios vary by industry and are best used to compare direct competitors or to measure change in the company\’s reliance on debt over time.<br><br>Among similar companies, a higher D/E ratio suggests more risk, while a particularly low one may indicate that a business is not taking advantage of debt financing to expand.<br><br> Preferably less than 2 for all');
        },
        defineDebtToAssets() {
            this.$swal('What Is the Total-Debt-to-Total-Assets Ratio?',
                'The total-debt-to-total-assets ratio shows the degree to which a company has used debt to finance its assets.<br><br>The calculation considers all of the company\'s debt, not just loans and bonds payable, and considers all assets, including intangibles.<br><br>If a company has a total-debt-to-total-assets ratio of 0.4, 40% of its assets are financed by creditors, and 60% are financed by owners\'(shareholders\') equity.<br><br> The ratio does not inform users of the composition of assets nor how a single company\'s ratio may compare to others in the same industry.<br><br>Preferably less than 0.5 for all');
        },
        defineCurrentRatio() {
            this.$swal('What Is the Current Ratio? ',
                'The current ratio compares all of a company’s current assets to its current liabilities.<br><br>These are usually defined as assets that are cash or will be turned into cash in a year or less and liabilities that will be paid in a year or less.<br><br>The current ratio helps investors understand more about a company’s ability to cover its short-term debt with its current assets and make apples-to-apples comparisons with its competitors and peers.<br><br>One weakness of the current ratio is its difficulty of comparing the measure across industry groups.<br><br>Preferably within 1-3 for all');
        },
    },
};



</script>



<style scoped>


</style>
