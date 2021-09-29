import styled from "styled-components";
import Image from "next/dist/client/image";
import useDimensions from "react-cool-dimensions";

const ProjectBox = styled.a`
  width: 500px;
  height: 700px;
  border-radius: 20px;
  border: black solid 4px;
  margin-top: ${(props) => props.mt}px;
  @media screen and (max-width: 1080px) {
    width: 40%;
    height: 540px;
    margin-right: 20px;
  }
  @media screen and (max-width: 767px) {
    width: auto;
    margin-inline: 1rem;
    margin-bottom: 56px;
    padding-bottom: 64px;
    margin-top: 10px;
  }
`;
const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  text-align: center;
`;
const H2 = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 0;
  @media (max-width: 1080px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;
const Description = styled.p`
    font-size: 2rem;
    margin-top: 0;  
    @media (max-width: 400px) {
    font-size: 1rem;
  }
`
const Project = ({ margin, title, description, picture }) => {
    const { observe, width, height } = useDimensions();
  return (
      <ProjectBox mt={margin} ref={observe}>
        <ProjectHeader>
          <H2>{title}</H2>
          <Description>{description}</Description>
        </ProjectHeader>
        <div>
        <Image src={"/img/tablet-black.png"}
          alt={title}
          width={width*0.40}
          height={height*0.50}/>

        </div>
      </ProjectBox>
  );
};

export default Project;
