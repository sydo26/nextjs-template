import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container } from '#styles/pages'

// @ts-ignore: Cannot find module
import perfilJPG from '#assets/Perfil.jpg?resize&sizes[]=200&sizes[]=400&sizes[]=720'
// @ts-ignore: Cannot find module
import GithubIcon from '#assets/github.svg'
// @ts-ignore: Cannot find module
import LinkedinIcon from '#assets/linkedin.svg'
// @ts-ignore: Cannot find module
import TwitterIcon from '#assets/twitter.svg'

import { ImageType } from '#types/ImageType'
import { NextPage } from 'next'
import { withTranslation, WithTranslation } from '#services/lang'

const perfil: ImageType = perfilJPG

const Home: NextPage<any> = ({ t }: WithTranslation) => {
  const router = useRouter()
  return (
    <Container>
      <Head>
        <title>Testando</title>
      </Head>
      <h2>
        {t('message')} <b>Vinícius</b> 😀
      </h2>
      <img src={perfil.src} srcSet={perfil.srcSet} alt="perfil" />
      <footer>
        <ul>
          <li onClick={() => router.push('https://github.com/sydo26')}>
            <GithubIcon />
          </li>
          <li
            onClick={() => router.push('https://www.linkedin.com/in/sydo26/')}
          >
            <LinkedinIcon />
          </li>
          <li onClick={() => router.push('https://twitter.com/sydo26')}>
            <TwitterIcon />
          </li>
        </ul>
        <i>Desenvolvido por Vinícius Roque(Sydo26).</i>
      </footer>
    </Container>
  )
}

Home.getInitialProps = async (): Promise<{
  namespacesRequired: string[]
}> => {
  return {
    namespacesRequired: ['home']
  }
}

export default withTranslation('home')(Home)
