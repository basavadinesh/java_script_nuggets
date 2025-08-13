const url = 'https://www.course-api.com/react-tours-project'

const getTours = async () => {

    try {

        const resp = await fetch(url)
        const tours = await resp.json()
        console.log(tours)
    } catch (error) {

        console.log(error)
        
    }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)
