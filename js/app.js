function renderCountries(countries) {
var htmlString = '';

for(var country of countries) {
    htmlString += `<tr>
      <td>${country.name.official}</td>
      <td>${country.region}</td>
      <td>${country.population}</td>
      <td class ="text-center"><img class = "w-25" src='${country.flags.png}'/></td>
  </tr>`;
  }
  
  document.getElementById('countries').innerHTML = htmlString;
}
 renderCountries(countries)