window.currencies = []

function filterCurrencies(searchValue){
   var result = [];
   for(var currency of currencies) {
    var currencyName = currency.txt.trim().toLowerCase();
    var currencyValue = currency.rate + '';
    if(currencyName.indexOf(searchValue)>=0  || currencyValue.indexOf(searchValue)>=0){
      result.push(currency);
    }
   }
   renderCurrencies(result)
}

function renderCurrencies(currencies) {
var htmlString = '';

if(!currencies.length) {
  htmlStr = `<tr><td colspan="4" class="text-center">No Items Found</td></tr>`;
  document.getElementById('currencies').innerHTML = htmlStr;
  return;
}

for(var currency of currencies) {
    htmlString += `<tr>
      <td>${currency.txt}</td>
      <td>${currency.rate}</td>
  </tr>`;
  }
  
  document.getElementById('currencies').innerHTML = htmlString;

  var trs = document.getElementsByTagName('tr');
 for(var i=0; i<trs.length; i++) { 
  var tr = trs[i];
  tr.onmouseenter = function(e){
   e.currentTarget.classList.add('bg-success')
  }
  tr.onmouseleave = function(e){
    e.currentTarget.classList.remove('bg-success')
  }
 }

}

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221110&json').then(res => res.json()).then(function(data) {
  window.currencies = data;
  renderCurrencies(data);
});

var search = document.getElementById('search');
search.onkeyup = function(e) {
  var searchValue = e.currentTarget.value;
  filterCurrencies(searchValue.trim().toLowerCase());
 }

 