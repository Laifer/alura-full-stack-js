import styled from 'styled-components'

import { books } from './recentReleasesData'
import { Title } from '../Title'

const RecentReleasesContainer = styled.section`
    display: flex;    
    background-color: #EBECEE;
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
        </RecentReleasesContainer>
    )
}

export default RecentReleases