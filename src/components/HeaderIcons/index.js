import './style.css'
import profile from '../../static/perfil.svg'
import bag from '../../static/sacola.svg'

function HeaderIcons() {
    const icons = [profile, bag]

    return (
        <ul className='icons'>
          { icons.map ( (icon) => (
              <li className='icon'><img src={icon}  alt=''/></li>
            )
          )}
        </ul>
    )
}

export default HeaderIcons