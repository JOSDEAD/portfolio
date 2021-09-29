import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import useDimensions from "react-cool-dimensions";
import { motion } from "framer-motion";
const StyledContainer = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 180px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const StyledGreeting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    flex:1;
    align-items: center;
    margin-top: 10vh;
    text-align: center;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`;
const H1 = styled(motion.h1)`
  font-size: 8vw;
  margin-block: 0;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size:15vw;
    max-width: 90vw;
  }
`;
const H6 = styled.h6`
  font-size: 2vw;
  margin-block: 0;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size:5vw;
  }
`;
const StyleImage = styled(Image)`
  max-width: 40vw;
  width: 20vw;
  height: 20vw;
  border-radius: 100%;
  @media (max-width: 600px) {
    margin-block: 0;
  }
`;
const StyledP = styled.p`
    max-width: 50vw;
    font-size: 1.5vw;
    font-weight: 300;
    @media (max-width: 600px) {
    font-size:4vw;
    max-width: 90vw;
  }
  @media (max-width: 1000px) and (min-width: 600px){
    font-size:2vw;
  }

`
const Presentation = ({ setSelected }) => {
  const { observe, width } = useDimensions();
  const { t, i18n } = useTranslation();
  const [sectionRef, sectionInView, entry] = useInView({ threshold: 0.5 });
  useEffect(() => {
    sectionInView && setSelected(entry.target.id);
  }, [entry, sectionInView, setSelected]);
  return (
    <StyledContainer id="home" ref={sectionRef}>
      <StyledGreeting>
        <H1 
            initial={{
                scale:0
            }}
            animate={{
                scale: 1
            }}
            transition={{
                    stiffness: 260,
                    damping: 20
                }}
        >{t("greeting")}</H1>
        <H6>{t("front-end-developer")}</H6>
        <StyledP>{t("profile-description")}</StyledP>
      </StyledGreeting>
      <ImageContainer ref={observe}>
        <StyleImage
          src={"/img/jose.png"}
          alt={"Jose's profile picture"}
          width={width<600 ? Math.round(width/1.5): Math.round(width/2)}
          height={width<600 ? Math.round(width/1.5): Math.round(width/2)}
        ></StyleImage>
      </ImageContainer>
    </StyledContainer>
  );
};

export default Presentation;
