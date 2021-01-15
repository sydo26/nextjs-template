import React from 'react'
import { NextPage } from 'next'
import App, { AppContext, AppProps } from 'next/app'

import GlobalStyle from '#styles/global'
import theme from '#styles/theme'
import { ThemeProvider } from 'styled-components'

import { AppWithTranslation, appWithTranslation } from '#services/lang'

/* @ts-ignore */
const MyApp: NextPage<AppProps, AppWithTranslation> = ({
  Component,
  pageProps
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

/* @ts-ignore */
MyApp.getInitialProps = async (appContext: AppContext) => {
  /* @ts-ignore */
  return { ...(await App.getInitialProps(appContext)) }
}

export default appWithTranslation(MyApp)
