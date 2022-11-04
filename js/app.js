console.log(countries);
var htmlString = '';

for(var country of countries) {
    htmlString += `<tr>
      <td>${country.name.official}</td>
      <td>${country.region}</td>
      <td>${country.population}</td>
      <td><img width="80rem" src='${country.flags.png}'/></td>
  </tr>`;
  }
  
  document.getElementById('countries').innerHTML = htmlString;