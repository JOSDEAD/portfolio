import styled from "styled-components";
import { routes } from "../../routes";
import Link from "next/link";
import { useEffect, useRef, createRef } from "react";
import useDynamicRefs from 'use-dynamic-refs';
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
`;

const Navbar = () => {
  const [getRef, setRef] =  useDynamicRefs();
  useEffect(()=>{
    const id1 = getRef('home');
    console.log('Home', id1)
},[])
  return (
    <StyledNavDiv>
      {routes.map((route) => {
          console.log(route.text);
        return (
          <Link href={route.link} key={route.id} passHref>
            <StyledRoutedLink ref={setRef(route.text)}>{route.text}</StyledRoutedLink>
          </Link>
        );
      })}
    </StyledNavDiv>
  );
};

export default Navbar;
