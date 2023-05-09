import styled from 'styled-components'
import { useEffect, useState } from 'react'

import { deleteFavorite, getFavorites } from '../services/favorites'
import bookImg from '../static/livro.png'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52, #326589);
`

const ResultContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Title = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px;
   margin: 0;
`

function Favorites() {

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchFavorites()
  }, [])

  async function fetchFavorites() {
    const apiFavorites = await getFavorites()
    setFavorites(apiFavorites)
  }

  async function removeFavorite(id) {
    await deleteFavorite(id)
    await fetchFavorites()
    alert(`Livro de ID ${id} removido da lista de favoritos`)
  }

  return (
    <AppContainer>
      <Title>Aqui estão seus livros favoritos:</Title>
      <ResultContainer>
      {favorites.length !== 0 ? favorites.map( favorite => (
        <Result onClick={() => removeFavorite(favorite.id)}>
          <p>{favorite.name}</p>
          <img src={bookImg} alt={favorite.name}/>
        </Result>
      ) ) : null}
      </ResultContainer>
    </AppContainer>
  );
}

export default Favorites;
