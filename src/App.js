import './styles/App.css';
import Logo from './components/Logo'
import profile from './static/perfil.svg'
import bag from './static/sacola.svg'

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icons = [profile, bag]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <ul className='header-options'>
          { textOptions.map( (text) => (
              <li className='option'><p>{text}</p></li>
            )
          )}
        </ul>
        <ul className='icons'>
          { icons.map ( (icon) => (
              <li className='icon'><img src={icon}/></li>
            )
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
