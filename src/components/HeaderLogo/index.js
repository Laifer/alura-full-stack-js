import './style.css'
import logo from '../../static/logo.svg'

function HeaderLogo() {
    return (
        <div className='logo'>
          <img 
            src={logo} 
            alt='A traingular logo that takes you to homepage when clicked' 
            className='logo-img'
          />
          <p><strong>Alura</strong> Books</p>
        </div>
    )
}

export default HeaderLogo