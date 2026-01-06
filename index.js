const api = `https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,currencies`;
const countriesFlags = document.querySelector('.countries__flags');

fetch(api)
.then(res => res.json())
.then((data) => {
    showCountry(data);
});

function showCountry(data) {
    data.map((item) => {
        const {flags , region , name , capital , currencies , languages , population} = item;
        // console.log(flags);
        console.log(data);
        
    countriesFlags.innerHTML += `
    
         <div class="every__container">
           <img src=${flags.svg} width='140' alt="">
           <p class="country__name"> <span> Name: </span> ${name.common} </p>
           <p class="country__region"> <span> Region: </span> ${region} </p>
           <p class="country__capital"> <span> Capital: </span> ${capital} </p>
           <p class="country__currencies"> <span> Currency: </span> ${currencies.name} </p>
           <p class="country__languages"> <span> Language: </span> ${languages} </p>
           <p class="country__population"> <span> Population: </span> ${population} </p>
        </div> <!-- every__container -->
    
    `
    })  
 };