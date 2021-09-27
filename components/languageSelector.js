import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LangContainer = styled.div`
  position: fixed;
  top:0;
  right: 0;
`;

const LanguageSelector = () => {

  const {i18n} = useTranslation();
  const handleChangeLanguage = (language) =>{
      i18n.changeLanguage(language);
  }
  return (
    <LangContainer>
      <button onClick={() => handleChangeLanguage('en')}>ENG</button>
      <button onClick={() => handleChangeLanguage('fr')}>FR</button>
    </LangContainer>
  );
};
export default LanguageSelector;
