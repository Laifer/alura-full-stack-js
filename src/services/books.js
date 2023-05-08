import axios from 'axios'

const booksAPI = axios.create({baseURL:'http://localhost:8000/books'})

async function getBooks() {
    const booksResponse = await booksAPI.get('/')

    return booksResponse.data
}

export {
    getBooks
}