import Logo from '../Logo'
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components'

function Header() {
    const HeaderContainer = styled.header`
        background-color: antiquewhite;
        display: flex;
        justify-content: center;
    `
    return (
        <HeaderContainer>
            <Logo/>
            <HeaderOptions/>
            <HeaderIcons/>
      </HeaderContainer>
    )
}

export default Header