function searchCountry() {
    const input = document.getElementById('countryInput');
    const resultDiv = document.getElementById('result');
    const countryName = input.value.trim();
  
    resultDiv.innerHTML = '';
  
    if (countryName === '') {
      alert('Please enter a country name');
      return;
    } 