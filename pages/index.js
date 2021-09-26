import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import styled from 'styled-components'
import { useContext } from 'react'
import SectionContext from '../context/sectionContext'


const Section = styled.div`
      background-color: ${props => props.color};
      height: 100vh;
      min-width: 100%;
`

export default function Home() {
  const {setRef} = useContext(SectionContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Jose Miguel</title>
        <meta name="description" content="Jose's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar/>
      <main className={styles.main}>
      <Section id='home' color='beige' ref={setRef('home')}>
          <h1>Home</h1>
      </Section>
      <Section id='projects' color='gray' ref={setRef('Projects')}>
          <h1>Projects</h1>
      </Section>
      <Section id='resume' color='blue' ref={setRef('Resume')}>
          <h1>Resume</h1>
      </Section>
      <Section id='contact' color='green' ref={setRef('Contact')}>
          <h1>Contact</h1>
      </Section>
     </main>
      <footer className={styles.footer}>
     </footer>
    </div>
  )
}
