import styled from "styled-components";
const H1 = styled.h1`
  font-size: 8vw;
  margin-block: 0;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 15vw;
    max-width: 90vw;
  }
`;
const TitleContainer = styled.div`
  padding-bottom: 120px;
  display: flex;
  align-items:center;
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;
const Circle = styled.div`
  position: absolute;
  right: auto;
  bottom: auto;
  width: 150px;
  height: 150px;
  border-radius: 260px;
  z-index:-1;
  background-color: ${props => props.color};
  @media screen and (max-width: 1200px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 767px) {
    width: 76px;
    height: 76px;
  }
`;
const SectionTitle = ({ tittle,color }) => {
  return (
    <TitleContainer>

        <Circle color={color}/>
      <H1>{tittle}</H1>
    </TitleContainer>
  );
};

export default SectionTitle;
