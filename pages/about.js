import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import AboutMeBlock from "../components/aboutMeBlock";
import React, {Fragment} from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const MainContainer = styled.div`
  min-width: 100%;
  margin-bottom: 180px;
`;
const AboutContainer = styled.div`
  display: flex;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  width: 760px;
  @media screen and (max-width: 850px) {
    width: auto;
    margin-inline: 1rem;
  }
`;
const Elemt= styled.div`
  width: 300px;
  height: 300px;
  background-color:red;
`
const Corru = styled.div`
  max-width: 80vw;
`
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const About = ({ setSelected }) => {
  const [sectionRef, sectionInView, entry] = useInView({ threshold: 0.3 });
  useEffect(() => {
    sectionInView && setSelected(entry.target.id);
  }, [entry, sectionInView, setSelected]);
  const { t } = useTranslation();

  const whoAmIContent = <Fragment>{t('who-am-i-name')} <strong>Jose Miguel</strong>, {t('who-am-i-text')}</Fragment>
  const passinateContent = <Fragment>{t('passionate-text1')} <br/> <br/>{t('passionate-text2')} <br/> <br/>{t('passionate-text3')}</Fragment>
  return (
    <MainContainer id="about" ref={sectionRef}>
      <SectionTitle tittle={"About"} color={'#284b63'} />
      <AboutContainer>
        <TextContainer>
          <AboutMeBlock title={t('who-am-i-title')} content={whoAmIContent}/>
          <AboutMeBlock title={t('what-can-i-do-title')} content={t('what-can-i-do-text')}/>
          <AboutMeBlock title={t('passionate')} content={passinateContent}/>
        </TextContainer>
      </AboutContainer >
      <Corru>

        <Carousel   swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={ true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-margin-40-px">
          <Elemt>aa</Elemt>
          <Elemt>a</Elemt>
          <Elemt>a</Elemt>
          <Elemt>a</Elemt>
          <Elemt>a</Elemt>
      </Carousel>
      </Corru>

    </MainContainer>
  );
};

export default About;
