import styled from 'styled-components'
import logo from '../../static/logo.svg'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
`

const LogoImg = styled.img`
  margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
          <LogoImg 
            src={logo} 
            alt='A traingular logo that takes you to homepage when clicked'
          />
          <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}

export default Logo