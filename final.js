function searchCountry() {
    const input = document.getElementById('countryInput');
    const resultDiv = document.getElementById('result');
    const countryName = input.value.trim();
  
    resultDiv.innerHTML = '';
  
    if (countryName === '') {
      alert('Please enter a country name');
      return;
    }
  
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => {
        if (!response.ok) throw new Error('Country not found');
        return response.json();
      })
      .then(data => {
        const country = data[0];
        const currencyKey = Object.keys(country.currencies)[0];
        const currency = country.currencies[currencyKey];
  
        resultDiv.innerHTML = `
          <h2>${country.name.common}</h2>
          <p><strong>Capital:</strong> ${country.capital?.[0] || 'N/A'}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong>Timezones:</strong> ${country.timezones.join(', ')}</p>
          <p><strong>Currency:</strong> ${currency.name} (${currency.symbol})</p>
          <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
        `;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
      });
  }