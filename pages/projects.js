import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Project from "../components/project";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";

const MainContainer = styled.div`
  min-width: 100%;
  margin-bottom: 180px;
`;
const ProjectsContainer = styled.div`
  display: flex;
  min-width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;


const Projects = ({ setSelected }) => {

  const [sectionRef, sectionInView, entry] = useInView({ threshold: 0.3 });
  useEffect(() => {
    sectionInView && setSelected(entry.target.id);
  }, [entry, sectionInView, setSelected]);
  const {t} = useTranslation();
  return (
    <MainContainer id="projects" ref={sectionRef}>
      <SectionTitle tittle={'Projects'} color={'#3c6e71'}/>
      <ProjectsContainer>
        <Project margin={40} title={'Video Chat Js'} description={t('video-chat-js')}/>
        <Project margin={80} title={'Simple Clock'} description={t('simple-clock-js')}/>
        <Project margin={40} title={'Instagram clone'} description={t('instagram')}/>
        <Project margin={80} title={'IP Tracker'} description={t('ip-tracker')}/>
      </ProjectsContainer>
    </MainContainer>
  );
};

export default Projects;
