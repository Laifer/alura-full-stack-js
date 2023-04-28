import './style.css'

function HeaderOptions() {
    const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return (
        <ul className='header-options'>
          { textOptions.map( (text) => (
              <li className='option'><p>{text}</p></li>
            )
          )}
        </ul>
    )
}

export default HeaderOptions