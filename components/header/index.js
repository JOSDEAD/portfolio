import styled from "styled-components"
import LanguageSelector from "./languageSelector"
import Logo from "./logo"

const HeaderContainer = styled.div`
    position: fixed;
    top:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100vw;
`

const Header = () => {

    return(
        <HeaderContainer>
            <Logo/>
            <LanguageSelector/>
        </HeaderContainer>
    )
}

export default Header