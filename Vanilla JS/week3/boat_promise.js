let getWood = () => {
    return new Promise((resolve, reject) => {
        resolve(console.log("Got wood!"))
        reject("Couldn't get wood")
    });
 }

 let buildBoat = () => {
     return new Promise((resolve, reject) =>{
        resolve(console.log("Build boat"))
        reject("couldn't build boat")
     })
 }
 let sailOcean = () => {
     return new Promise((resolve, reject) =>{
         resolve(console.log("Sail the ocean"))
         reject("couldn't sail the ocean")
     })
 }

 getWood()
    .then(() => { return buildBoat();})
    .then(() => { return sailOcean();})
    .then(() => console.log("We have gotten the wood, built the boat and gone to sail the ocean!"))
    .catch((err) => console.log(err))
