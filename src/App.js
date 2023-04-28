import './styles/App.css';
import logo from './static/logo.svg'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logo'>
          <img src={logo} alt='A traingular logo that takes you to homepage when clicked'/>
          <p><strong>Alura</strong> Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
