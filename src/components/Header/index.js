import './style.css'
import HeaderLogo from '../HeaderLogo'
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';

function Header() {
    return (
        <header className='App-header'>
            <HeaderLogo/>
            <HeaderOptions/>
            <HeaderIcons/>
      </header>
    )
}

export default Header