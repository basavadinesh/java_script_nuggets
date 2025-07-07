const cart = [

    {   title: 'Samsung Galaxy s25 Ultra',
        price: 599.99,
        amount: 1,
    }, 
    {
        title: 'google pixel',
        price:  499.99,
        amount: 2,
    },

    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 4,
    },

    {

        title: 'Xiamo Redmi Note 5',
        price: 455.99,
        amount:8
    }





]


let total = cart.reduce((total, cartItem) => {

    
    const{amount,price}   = cartItem;
    //count Items
    total.totalItems += amount
    //count Sum
    total.cartTotal += amount * price

    return total
}, {

    totalItems: 0,
    cartTotal: 0,
})

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'


const fetchRepos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.reduce((total, repo)=> {
        const {language} = repo;
if(total[language]){

    total[language] = total[language] + 1
}  

else{

    total[language] = 1
}

        return total
    }, {});

    console.log(newData)
}



fetchRepos()






