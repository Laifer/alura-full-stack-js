import styled from 'styled-components'
import { useState } from 'react'

import Input from '../Input'

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

function Search() {
    const [typedText, setTypedText] = useState('')

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estande.</SubTitle>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={event => setTypedText(event.target.value)}
            />
            <p>{typedText}</p>
        </SearchContainer>
    )
}

export default Search