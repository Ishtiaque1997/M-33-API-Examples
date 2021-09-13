//function to load countries
const loadCountries=()=>{
 fetch('https://restcountries.eu/rest/v2/all')
 .then(res=>res.json())
 .then(data=>displayCountries(data))
}
loadCountries();
//function to display countries
const displayCountries=(countries)=>{
 // for(const country of countries){
 //  console.log(country)
 // }
 const countriesDiv=document.getElementById('countries');
 countries.forEach(country=>//throw for each
 {
  const div=document.createElement('div');
  div.classList.add('country')//add a class
  div.innerHTML=
  `
  <h3>${country.name}</h3>
  <p>${country.capital}</p>
  
  <button onClick="loadCountryByName('${country.name}')">Details</button>
  `//calling dynamically by name
  countriesDiv.appendChild(div);
 })
}
//function to load Country by name
const loadCountryByName=name=>{
 const url=`https://restcountries.eu/rest/v2/name/${name}`;//fetch from url
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayCountryDetail(data[0]))
 }
//function to display detail
const displayCountryDetail=country=>{
 const countryDiv=document.getElementById('country-detail');
 countryDiv.innerHTML=`
 <h5>${country.name}</h5>
 <p>${country.population}</p>
 <img width="200px" src="${country.flag}"/>
 `
}