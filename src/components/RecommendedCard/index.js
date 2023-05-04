import styled from 'styled-components'

import { Title } from '../Title'

const CardsContainer = styled.div`
    align-items: center;
    display:flex;
    justify-content: center;
    flex-direction: column;
`

const CardContainer = styled.div`
    align-items: center;
    background-color: #44475a;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius:10px;
    border: 10px 10px 10px 10px;
    display: flex;
    margin: 10px;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
`

const ButtonContainer = styled.button`
    background-color: #6272a4;
    color: #ffb86c;
    padding: 10px 0;
    font-size: 16px;
    order: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;

    &:hover {
        cursor: pointer;
    }
`

const DescriptionContainer = styled.p`
    max-width: 300px;
`

const SubtitleContainer = styled.h4`
    color: #50fa7b;
    font-size: 18px;
    font-weight: bold;
    margin 15px 0;
`

const BookImgContainer = styled.img`
    width: 150px;
`

function RecommendedCard({title, subtitle, description, img}) {
    return (
        <CardsContainer>
            <CardContainer>
                <div>
                    <Title 
                        fontSize='16px' 
                        titleColor='#f1fa8c' 
                        textAlign='left'
                        bgColor='#44475a'
                    >{title}</Title>
                    <SubtitleContainer>{subtitle}</SubtitleContainer>
                    <DescriptionContainer>{description}</DescriptionContainer>
                </div>
                <div>
                    <BookImgContainer alt='capa de livro recomendado' src={img}/>
                    <ButtonContainer>Saiba mais</ButtonContainer>
                </div>
            </CardContainer>
        </CardsContainer>
    )
}

export default RecommendedCard