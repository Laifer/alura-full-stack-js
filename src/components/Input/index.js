import styled from 'styled-components'

const Input = styled.input`
    order: 1px solid antiquewhite;
    background: transparent;
    border: 1px solid antiquewhite;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: antiquewhite;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: antiquewhite;
        font-size: 16px;
    }
`

export default Input