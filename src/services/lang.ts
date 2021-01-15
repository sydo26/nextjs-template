import NextI18next, { WithTranslation, AppWithTranslation } from 'next-i18next'
import path from 'path'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: { localeSubpaths }
} = getConfig()

const instance = new NextI18next({
  defaultLanguage: 'en',
  otherLanguages: ['pt'],
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  localePath: path.resolve('./public/static/lang'),
  localeSubpaths
})

export default instance

export const {
  appWithTranslation,
  Link,
  Router,
  Trans,
  config,
  i18n,
  initPromise,
  useTranslation,
  withTranslation
} = instance

export type { AppWithTranslation, WithTranslation }
