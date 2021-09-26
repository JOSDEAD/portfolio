import "../styles/globals.css";
import SectionContext from "../context/sectionContext";
import useDynamicRefs from 'use-dynamic-refs';

function MyApp({ Component, pageProps }) {
  const [getRef,setRef] = useDynamicRefs();
  return (
    <SectionContext.Provider value={{setRef,getRef}}>
      <Component {...pageProps}/>
    </SectionContext.Provider>
  );
}

export default MyApp;
