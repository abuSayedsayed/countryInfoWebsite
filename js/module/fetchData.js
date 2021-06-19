//the function fetch data by given url and return a calkback function

async function fetchData(url,cb){
  try{
  const res=await fetch(url)
  
  if(res.status==200){
  const data=await res.json()
  cb(data,null)
  }else{
    cb(null,res.status)
  }
  
  }catch(err){
    cb(null,res)
  }
}

export default fetchData