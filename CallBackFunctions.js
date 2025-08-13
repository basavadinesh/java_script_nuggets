function makeUppercae(value){
    console.log(value.toUpperCase())

}




function reverseString(value){

    console.log(value.split('').reverse.join(''))
}


function handleName(name, cb){


    const fullName = `${name} smith`

    cb(fullName)


}

handleName('peter', makeUppercae)
handleName('peter', reverseString)

handleName('susan', (value) => console.log(value))