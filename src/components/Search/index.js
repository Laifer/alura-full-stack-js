import styled from 'styled-components'
import { useState } from 'react'

import Input from '../Input'
import { books } from './searchData'

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

function Search() {
    const [searchedBooks, setSearchedBook] = useState([])

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
                <Result>
                    <p>{book.name}</p>
                    <img src={book.src} />
                </Result>
            ) ) }
        </SearchContainer>
    )
}

export default Search