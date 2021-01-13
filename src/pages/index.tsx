import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages'

// @ts-ignore: Cannot find module
import perfilImage from '../assets/Perfil.jpg?resize&sizes[]=200&sizes[]=400&sizes[]=720'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Testando</title>
      </Head>
      <main>
        <h2>Olá mundo!</h2>
        <img src={perfilImage.src} srcSet={perfilImage.srcSet} alt="perfil" />
      </main>
    </Container>
  )
}

export default Home
