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
 for(var i = 1; i < trs.length; i++) { 
  var tr = trs[i];
  tr.onmouseenter = function(e){
   e.currentTarget.classList.add('bg-success')
  }
  tr.onmouseleave = function(e){
    e.currentTarget.classList.remove('bg-success')
  }
 }
}

function getCurrencies(date){
  document.getElementById('search').value= '';
  fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`).then(res => res.json()).then(function(data) {
    window.currencies = data;
    renderCurrencies(data);
  });
}

var currentDate = '2022-11-11';
getCurrencies(currentDate.replaceAll('-',''));
document.getElementById('search-date').value = currentDate;

var search = document.getElementById('search');
search.onkeyup = function(e) {
  var searchValue = e.currentTarget.value;
  filterCurrencies(searchValue.trim().toLowerCase());
 }

 document.getElementById('search-date').onchange = function(e){
  var date = e.currentTarget.value.replaceAll('-','');
  getCurrencies(date)
 }