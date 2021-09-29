import styled from "styled-components"

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`
const StyledLogo = styled.div`
    height: 100%;
    width: 100%;
    background-color:black;
`

const Logo = () => {
    return (
        <LogoContainer>
             <StyledLogo>a</StyledLogo>
            <h3>Jose</h3>
        </LogoContainer>
    )
}

export default Logo