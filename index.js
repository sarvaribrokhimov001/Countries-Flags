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
    
    
         <div>
           <img src=${flags.svg} width='100' alt="">
           <p class="country__name">${name.common}</p>
           <p class="country__region"> ${region} </p>
           <p class="country__capital"> ${capital} </p>
           <p class="country__currencies"> ${currencies.name} </p>
           <p class="country__languages"> ${languages} </p>
           <p class="country__population"> ${population} </p>
        </div>
    
    `
    })
   
 };