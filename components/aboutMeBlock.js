import styled from "styled-components";

const Block = styled.div`
  margin-bottom: 80px;
`;
const H5 = styled.h5`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 2rem;
`;
const P = styled.p`
  font-size: 1.4rem;
  line-height: 1.6em;
  font-weight: 300;
`;

const AboutMeBlock = ({ title, content }) => {
  return (
    <Block>
      <H5>{title}</H5>
      <P>{content}</P>
    </Block>
  );
};

export default AboutMeBlock;
