document.addEventListener("DOMContentLoaded", () => {
    const countriesContainer = document.querySelector(".countries-container");

    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(countries => {
            countries.forEach(country => {
                const countryCard = document.createElement("div");
                countryCard.classList.add("country-card");

                const countryName = document.createElement("h2");
                countryName.textContent = country.name.common;

                const countryFlag = document.createElement("img");
                countryFlag.src = country.flags.png;
                countryFlag.alt = `${country.name.common} Flag`;
                countryFlag.classList.add("country-flag");

                const countryCode = document.createElement("p");
                countryCode.textContent = `Country Code: ${country.cca2}`;

                const countryPopulation = document.createElement("p");
                countryPopulation.textContent = `Population: ${country.population}`;

                countryCard.appendChild(countryFlag);
                countryCard.appendChild(countryName);
                countryCard.appendChild(countryCode);
                countryCard.appendChild(countryPopulation);

                countriesContainer.appendChild(countryCard);
            });
        })
        .catch(error =>
            console.error("Error fetching countries:", error)
        );
});


