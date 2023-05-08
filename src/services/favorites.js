import axios from 'axios'

const favoritessAPI = axios.create({baseURL:'http://localhost:8000/favorites'})

async function getFavorites() {
    const favoritessResponse = await favoritessAPI.get('/')

    return favoritessResponse.data
}

export {
    getFavorites
}