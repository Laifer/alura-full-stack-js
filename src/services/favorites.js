import axios from 'axios'

const favoritessAPI = axios.create({baseURL:'http://localhost:8000/favorites'})

async function getFavorites() {
    const favoritessResponse = await favoritessAPI.get('/')

    return favoritessResponse.data
}

async function postFavorite(id) {
    await favoritessAPI.post(`/${id}`)
}

async function deleteFavorite(id) {
    await favoritessAPI.delete(`/${id}`)
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite
}