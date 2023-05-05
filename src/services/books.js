import axios from 'axios'

const booksAPI = axios.create({baseURL:'http://localhost:8000/books'})

function getBooks() {
    const booksResponse = booksAPI.get('/')

    return booksResponse.data
}

export {
    getBooks
}