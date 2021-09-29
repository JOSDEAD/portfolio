import LanguageSelector from "../header/languageSelector";
import Logo from "../header/logo";
import styled from "styled-components";
import Link from "next/link";
const TopNavContainer = styled.div`
  width: 100%;
  position: static;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  flex-direction: row;
  @media (max-width: 600px) {
    display: none;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const StyledRoutedLink = styled.a`
  width: fit-content;
  padding: 4px 12px 6px;
  padding-top: 8px;
  color: gray;
  @media (max-width: 600px) {
    margin-block: 0.5rem;
  }
`;

const StyledActive = styled.a`
  color: black;
  border-radius: 820px;
  padding: 4px 12px 6px;
  padding-top: 8px;
  border: 3px solid;
  width: fit-content;
  line-height: 1.8em;
  font-weight: 400;
  @media (max-width: 600px) {
    margin-block: 0.5rem;
  }
`;
const TopNav = ({ routes }) => {
  const navbarElements = routes.map((route) => {
    return (
      <Link href={route.link} key={route.id} passHref>
        <StyledRoutedLink>{route.text}</StyledRoutedLink>
      </Link>
    );
  });
  return (

        <TopNavContainer>
          <Logo />
          <ButtonContainer>
            {navbarElements}
            <LanguageSelector />
          </ButtonContainer>
        </TopNavContainer>
      
  );
};

export default TopNav;
