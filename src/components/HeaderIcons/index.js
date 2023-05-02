import profile from '../../static/perfil.svg'
import bag from '../../static/sacola.svg'
import styled from 'styled-components'

const icons = [profile, bag]

const IconsList = styled.ul`
  display: flex;
  align-items: center;
`

const Icon = styled.li`
  margin: 0 40px 0 0;
  width: 25px;
`

let iconId = 0

function HeaderIcons() {
    return (
        <IconsList>
          { icons.map ( (icon) => (
              <Icon key={iconId++}><img src={icon}  alt=''/></Icon>
            )
          )}
        </IconsList>
    )
}

export default HeaderIcons