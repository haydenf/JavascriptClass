// let ourPromise = new Promise(cb)
// resolve -> process successful
// reject -> something went wrong

let ourPromise = new Promise((resolve, reject)=>{
    if(true){
      resolve("All good");
    }else{
      reject("something went wrong");
    }
  })
  
  ourPromise
    .then((result) => {
      console.log(result)
    })
    .catch((err)=>{
      console.log(err)
    })
  // execute a promise code`