import styled from 'styled-components'

import { books } from './recentReleasesData'
import { Title } from '../Title'
import RecommendedCard from '../RecommendedCard'
import bookImg from '../../static/livro2.png'

const RecentReleasesContainer = styled.section`
    display: flex;    
    background-color: #282a36;
    padding-bottom: 20px;
    flex-direction: column;
`

const NewBookContainer = styled.div`
    margin-top 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    overflow-x: scroll;
    background-color: #44475a;
`

function RecentReleases() {
    return (
        <RecentReleasesContainer>
            <Title 
                titleColor='#ED9B00' 
                fontSize='36px' 
            >ULTIMOS LANÇAMENTOS</Title>
            <NewBookContainer>
            {books.map( book => (
                <img alt={book.name} src={book.src}/>
            ) )}
            </NewBookContainer>
            <RecommendedCard
                title='Talvez você se interesse por'
                subtitle='Angular 11'
                description='Construindo uma aplicação com a plataforma Google'
                img={bookImg}
            />
        </RecentReleasesContainer>
    )
}

export default RecentReleases