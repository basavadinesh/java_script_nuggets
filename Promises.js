const value = 2

const promise = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random() * 3)
    if(random === value){
        resolve('you guessed correctly')
    }
    resolve([1,2,3])
    reject('there was an error')
    

})

console.log(promise)

promise.then((data) => console.log(data).catch((err) => {
    console.log(err)
}) )