import fetchData from './module/fetchData.js'

//the function fetches data by the given url and return it in a callback function
const carouselContainer = document.getElementById('carousel-inner')
const COUNTRY_DATA_BASE_URL=`https://restcountries.eu/rest/v2`


fetchData(`${COUNTRY_DATA_BASE_URL}/all`, (data, err)=> {
     if (err === null) {
        
          data.forEach(data=>{
         createSlider(data)
          })
     } else {
          console.log(err)
     }

})


function createSlider(data) {

     const carouselItem = document.createElement('div')
     carouselItem.classList.add('carousel-item')
     let title=data.name
     if(title.length>14){
      const  splitData=title.split(' ')
        title=`${splitData[0]} ${splitData[1]}`
     }
     const singleSlider = `
     <div class="item-gradient"></div>
   <img class="img-fluid" src="https://source.unsplash.com/600x300/?${data.name},history" alt="${data.name} Image">
   <div class="carousel-caption px-3 px-md-5">
    <h1 class="caption-title">${title}</h1>
    <div class="coutry-meta my-3 my-md-4">
      <div class="d-flex justify-content-between align-items-center country-info my-2 ">
            <div class="h4"> CAPITAL : <span>${data.capital} .</span>
           </div>
             <div class="h4"> POPULATION : <span>${data.population} Core .</span>
               </div>
            </div>
         <div class="d-flex justify-content-between align-items-center country-info my-2">
           <div class="h4"> AREA : <span>${data.area} Sq.km</span>
            </div>
           <div class="h4"> REGION : <span> ${data.subregion} / ${data.region} .</span>
            </div>
         </div>
         <div class="my-3 my-md-4">
             <button class="know-more" onclick="location.href='#${data.name.toLowerCase()}';">KNOW MORE</button>
         </div>
      </div>
   </div>`
     carouselItem.innerHTML = singleSlider
     carouselContainer.appendChild(carouselItem)
}