import styled from 'styled-components'
import { useEffect, useState } from 'react'

import { getFavorites } from '../services/favorites'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52, #326589);
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

  return (
    <AppContainer>
      {favorites.map( favorite => (
        <p>{favorite.name}</p>
      ) )}
    </AppContainer>
  );
}

export default Favorites;
