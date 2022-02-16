import axios from "axios";


console.log('Hallo daar!');

async function getInformation(name) {
    const containerResult = document.getElementById('info');
    const errorMassage = document.getElementById('error-message');

    errorMassage.innerHTML = '';
    containerResult.innerHTML = '';

    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`);
        console.log(result.data);
        const countries = result.data[0];

        containerResult.innerHTML =
            `
        <img src="${countries.flag}" width="100px"/>
        <h3>${countries.name}</h3>
        <p>${countries.name} is situated in ${countries.subregion} and has a population of ${countries.population}</p>
        <p>The capital is ${countries.capital} ${getCurrencies(countries.currencies)}</p>
        <p> ${getLanguages(countries.languages)}</p>
                                                       `

    } catch (e) {
    console.error(e);
    errorMassage.innerHTML = `
    <p> ${name} doesn't exsist try again</p>
    `
    }
}


function getCurrencies(currencies) {

    if (currencies.length === 2) {
        return `and you can pay with ${currencies[0].name} and ${currencies[1].name}`
    } else {
        return `and you can pay with ${currencies[0].name}`
    }
}

function getLanguages(languages) {
    if (languages.length === 4) {
        return `The spoken languages are ${languages[0].name}, ${languages[1].name}, ${languages[2].name} or ${languages[3].name}`
    } else if (languages.length === 3) {
        return  `The spoken languages are ${languages[0].name}, ${languages[1].name} or ${languages[2].name}`
    } else if (languages.length === 2){
        return `The spoken languages are ${languages[0].name} and ${languages[1].name}`
    } else {
        return `The spoken language is ${languages[0].name}`
    }
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', searchingCountries)

function searchingCountries(e) {
    e.preventDefault()

    const inputField = document.getElementById('search-country');
    getInformation(inputField.value);

    inputField.innerHTML = '';
}





