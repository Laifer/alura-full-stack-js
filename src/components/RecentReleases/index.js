import { books } from './recentReleasesData'
import styled from 'styled-components'

const RecentReleasesContainer = styled.section`
    display: flex;    
    background-color: #EBECEE;
    padding-bottom: 20px;
    flex-direction: column;
`

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: antiquewhite;
    color: #ED9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
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
            <Title>ULTIMOS LANÇAMENTOS</Title>
            <NewBookContainer>
            {books.map( book => (
                <img alt={book.name} src={book.src}/>
            ) )}
            </NewBookContainer>
        </RecentReleasesContainer>
    )
}

export default RecentReleases