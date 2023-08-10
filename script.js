const searchInput = document.getElementById('searchInput');
const countryList = document.getElementById('countryList');

async function getCountries(searchTerm) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
    }
}

function displayCountries(countries) {
    countryList.innerHTML = '';
    countries.forEach(country => {
        const li = document.createElement('li');
        li.textContent = country[0].name.common;
        countryList.appendChild(li);
    });
}

searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value;
    const countries = await getCountries(searchTerm);
    displayCountries(countries);
});
