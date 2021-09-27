import styled from "styled-components";
import { routes } from "../../routes";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const StyledNavDiv = styled(motion.nav)`
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
  @media (max-width: 600px) {
    min-width:100vw;
    top:auto;
    flex-direction: row;
    background-color: white;
  }
`;

const StyledRoutedLink = styled.a`
  transform: rotate(-90deg);
  width: fit-content;
  padding: 4px 12px 6px;
  padding-top: 8px;
  color: gray;
    @media (max-width: 600px) {
    transform: rotate(0deg);
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
  transform: rotate(-90deg);
  line-height: 1.8em;
  font-weight: 400;
  @media (max-width: 600px) {
    transform: rotate(0deg);
    margin-block:0.5rem;
  }
`;

const Navbar = ({ selected }) => {
  return (
    <>
    <AnimatePresence>
      {selected !== 'home' && (
        <StyledNavDiv
          initial={{opacity:0}}
          animate={{ opacity: 1 }}
          transition={{duration:1}}
          exit={{x:-100}}
        >
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
    </AnimatePresence>
    </>
  );
};

export default Navbar;
