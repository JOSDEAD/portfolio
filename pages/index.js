import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer";
import Presentation from './home'
import LanguageSelector from '../components/languageSelector'

const Section = styled.div`
      background-color: ${props => props.color};
      height: 100vh;
      min-width: 100%;
`

export default function Home() {
const [selected,setSelected] = useState();
  const [section1Ref, section1InView,entry1] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView,entry2] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView,entry3] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView,entry4] = useInView({ threshold: 0.5 });
  useEffect(()=>{
    section1InView && setSelected(entry1.target.id)
    section2InView && setSelected(entry2.target.id)
    section3InView && setSelected(entry3.target.id)
    section4InView && setSelected(entry4.target.id)
  },[entry1, entry2, entry3, entry4, section1InView, section2InView, section3InView, section4InView])
  return (
    <div className={styles.container}>
      <Head>
        <title>Jose Miguel</title>
        <meta name="description" content="Jose's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar selected={selected}/>
      <main className={styles.main}>
        <LanguageSelector/>
      <Presentation color='beige' ref={section1Ref} setSelected={setSelected}>
          <h1>Home</h1>
      </Presentation>
      <Section id='projects' color='gray' ref={section2Ref}>
          <h1>Projects</h1>
      </Section>
      <Section id='resume' color='blue' ref={section3Ref}>
          <h1>Resume</h1>
      </Section>
      <Section id='contact' color='green' ref={section4Ref}>
          <h1>Contact</h1>
      </Section>
     </main>
      <footer className={styles.footer}>
     </footer>
    </div>
  )
}
