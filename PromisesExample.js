const btn = document.querySelector('.btn')

btn.addEventListener('click', () =>{
    addColor(1000, '.first', 'red')
    .then((data) => addColor(3000, '.second', 'blue', data))
    .then((data) => addColor(2000, '.second', 'green', data))
    .catch((err) => console.log(err))

})

function addColor(time,selector,color, data){
    const element = document.querySelector(selector)
    return new Promise((resolve,reject) => {
        if(element){
            setTimeout(() => {
            element.style.color = color
            resolve(data)
            }, time)
        }
        else{

            reject(`There is no such element: "${selector}`)

        }
    })
}
