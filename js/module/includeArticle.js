//*******BISMILLAHIR RAHMANIR RAHIM******\\
import fetchData from './fetchData.js'

 function includeArticle(url,container){
   fetchData(url,(data,err)=>{
      if(data!=null){
       data.articles.forEach(article=>createArticle(article,container))

      }else{
       showErr(err,container)  
      }
   })
}

function createArticle(data,container){
   const row=document.createElement('div')
   row.classList.add('row')
   row.classList.add('single-article')
   row.classList.add('my-2')
   row.classList.add('my-md-3')
   const article=`
               <div class="col-md-12 img-container my-md-0 my-3">
                  <img class=" mb-2 article-img" src="${data.urlToImage}" alt="${data.title}" />
                  <h3 class="article-heading my-1">${data.title}<span class="badge badge-dark bg-dark">${data.title.split(' ')[0]}</span></h3>
                  <div class="info-container">
                     <div class="publish-date">${data.publishedAt} by  <cite>${data.author===null?'lojja lagse !!':data.author}</cite> </div>
                     <a href="${data.url}" class="read-more">Read More...</a>
                    </div>
               </div>
            <div class="col-md-12">
               <h4 class="desc my-2">${data.description}</h4>
               <p class="content">${data.content}</p>
               <a href="${data.url}" class="btn  btn-outline-primary go-to-main" target="_blank">Read Full Blog</a>
            </div>
      <!--single news ends here-- >
   
   
   `
   row.innerHTML=article
   container.appendChild(row)
   
   //single-article my-2 my-md-3
}
function showErr(err,container){
   container.innerHTML=`
   <h1 class="text-center text-danger">${err.statusCode} ERROR OCCURED</h1>
   `
}



export default includeArticle