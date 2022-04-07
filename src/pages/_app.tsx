import AppProviders from 'providers/index'
import type { AppProps } from 'next/app'
import { StyledGlobal } from 'theme/styledGlobal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledGlobal />
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  )
}

export default MyApp
