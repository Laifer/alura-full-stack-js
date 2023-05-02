import styled from 'styled-components'

import Header from './components/Header';
import Search from './components/Search';
import RecentReleases from './components/RecentReleases';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search />
      <RecentReleases />
    </AppContainer>
  );
}

export default App;
