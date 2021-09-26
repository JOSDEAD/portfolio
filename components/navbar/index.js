import styled from "styled-components";
import { routes } from "../../routes";
import Link from "next/link";

const StyledNavDiv = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-height: 100vh;
  position: -webkit-sticky;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

const StyledRoutedLink = styled.a`
  transform: rotate(-90deg);
  width: fit-content;
  padding: 4px 12px 6px;
  padding-top: 8px;
  color: gray;
`;

const StyledActive = styled.a`
  color: black;
  border-radius: 820px;
  padding: 4px 12px 6px;
  padding-top: 8px;
  border: 3px solid;
  width: fit-content;
  transform: rotate(-90deg);
  line-height: 1.8em;
  font-weight: 400;
`;

const Navbar = ({ selected }) => {
  console.log(selected);
  return (
    <>
      {selected !== 'home' && (
        <StyledNavDiv>
          {routes.map((route) => {
            return (
              <Link href={route.link} key={route.id} passHref>
                {selected === route.id ? (
                  <StyledActive>{route.text}</StyledActive>
                ) : (
                  <StyledRoutedLink>{route.text}</StyledRoutedLink>
                )}
              </Link>
            );
          })}
        </StyledNavDiv>
      )}
    </>
  );
};

export default Navbar;
