//BISMILLAHIR RAHMANIR RAHIM
import fetchData from './module/fetchData.js'

const COUTRY_DATA_URL = `https://restcountries.eu/rest/v2/all`
const countryMoreInfoContainer = document.getElementById('country-more-info-container')

fetchData(COUTRY_DATA_URL, (countries, err) => {
   if (countries != null) {
         countryMoreInfoContainer.innerHTML=''
      countries.forEach(country => {
         generateTable(country)
         
      })
   } else {
      console.log(err)
   }
})


function generateTable(data) {
   const wrapperDiv = document.createElement('div')
   wrapperDiv.classList.add('my-3')
   wrapperDiv.id=`${data.name.toLowerCase()}`
   const countryMoreInfo = `  
   <div class = "d-flex justify-content-center align-items-center my-2" >
    <img class="img-fluid country-img w-100 mx-auto " src="${data.flag}" alt="" />
      </div>

      <h3 class="text-center country-name"> ${data.name}
      </h3>
   <table class="country-more-info">
                  <tbody>
                     <tr>
                        <td>NAME : </td>
                        <td>${data.name}</td>
                        <td>CAPITAL : </td>
                        <td>${data.capital}</td>
                     </tr>
                     <tr>
                        <td>CALLING CODES : </td>
                        <td>${getArrData(data.callingCodes)}</td>
                        <td>TIMEZONE : </td>
                        <td>${getArrData(data.timezones)}</tr>
                     <tr>
                        <td>POPULATION : </td>
                        <td>${data.population}</td>
                        <td>AREA : </td>
                        <td>${data.area} Sq.km</td>
                     </tr>
                     <tr>
                        <td>Alpha 2 Code : </td>
                        <td>${data.alpha2Code}</td>
                        <td>Alpha 3 Code : </td>
                        <td>${data.alpha3Code}</td>
                     </tr>
                     <tr>
                        <td>LANGUAGES : </td>
                        <td>${languageData(data.languages)} </td>
                        <td>CURRENCY : </td>
                        <td>${currencyData(data.currencies)}</td>
                     </tr>
                     <tr>
                        <td>LATTITUDE : </td>
                        <td>${data.latlng[0]}</td>
                        <td>LONGITUDE : </td>
                        <td>${data.latlng[1]}</td>
                     </tr>
                     <tr>
                        <td>REGION : </td>
                        <td>${data.region}</td>
                        <td>SUBREGION</td>
                        <td>${data.subregion}</td>
                     </tr>
                     <tr>
                        <td>NATIVE NAME : </td>
                        <td>${data.nativeName}</td>
                        <td>NUMERIC CODE : </td>
                        <td>${data.numericCode}</td>
                     </tr>
                     <tr>
                        <td>TOP LAlEVEL DOMAIN : </td>
                        <td>${data.topLevelDomain}</td>
                        <td>CIOC : </td>
                        <td>${data.cioc}</td>
                     </tr>
                     <tr>
                        <td>REGIONAL BLOCS: </td>
                        <td>${data.region}</td>
                        <td>BORDERS : </td>
                        <td>${getArrData(data.borders)}</td>
                     </tr>
                  </tbody>
               </table>  `
               
               
   wrapperDiv.innerHTML = countryMoreInfo
   countryMoreInfoContainer.appendChild(wrapperDiv)
}

function getArrData(arr) {
   let result = ''
   arr.forEach(data => {
      result += ` , ${data}`
   })
   return result.slice(2)
}

function currencyData(currencies){
   let currencyName=''
   currencies.forEach(currency=>{
      currencyName+=currency.code
   })
   return currencyName
}

function languageData(languages){
   let languageName=''
   languages.forEach(language=>{
      languageName+=` ${language.name} : ${language.nativeName}`
   })
   return languageName
}



