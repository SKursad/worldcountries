import axios from "axios";

console.log('Hallo daar!');

async function getCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data);

        getAllCountries(result.data);

        result.data.sort((a, b) => {
            return a.population - b.population
        });


    } catch (error) {
        console.error(error);
    }
}
getCountries()

function getAllCountries(countries) {
    const countryUnorderedList = document.getElementById('world');

    countries.map((allCountries) => {

        const countryList = document.createElement('li');

        countryList.innerHTML = `
        <img src="${allCountries.flag}" class="flag"/>
        <h3 class="${allCountries.region}">${allCountries.name}</h3>
        <p>has a population of ${allCountries.population}</p>
        `
        countryUnorderedList.appendChild(countryList);
    });
}