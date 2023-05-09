import styled from 'styled-components'
import { useEffect, useState } from 'react'

import Input from '../Input'
import { getBooks } from '../../services/books'
import { postFavorite } from '../../services/favorites'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52, #326589);
    color: antiquewhite;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: antiquewhite;
    font-size: 36px;
    text-align: center;
    width: 100%
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom:40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    width: 300px;

    p{
        align: center;
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid antiquewhite;
    }
`

// const ResultContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 10px 20px 0 20px;
//     max-width: 100%;
//     overflow-x: scroll;
//     overflow-y: scroll;
// `

function Search() {
    const [searchedBooks, setSearchedBook] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const apiBooks = await getBooks()
        setBooks(apiBooks)
    }

    async function insertFavorite(id) {
        await postFavorite(id)
        alert(`Livro de ID ${id} inserido na lista de favoritos`)
    }

    let resultId = 0

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estande.</SubTitle>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={event => {
                    const typedText = event.target.value
                    const searchResult = books.filter( book => book.name.includes(typedText))
                    setSearchedBook(searchResult)
                }}
            />
            { searchedBooks.map( book => (  
                <Result key={resultId++} onClick={() => insertFavorite(book.id)}>
                    <p>{book.name}</p>
                    <img alt='' src={book.src} />
                </Result>
            ) ) }
        </SearchContainer>
    )
}

export default Search