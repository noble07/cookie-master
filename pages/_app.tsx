import '@/styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '@/themes'
import { Theme } from '@emotion/react'

interface AppNewProps extends AppProps {
  theme: string
}

export default function App({ Component, pageProps, theme }: AppNewProps) {
  
  const currentTheme: Theme = theme === 'light'
    ? lightTheme
    : theme === 'dark'
      ? darkTheme
      : customTheme

  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.getInitialProps = async(appContext: AppContext) => {

  const { theme } = appContext.ctx.req ? ((appContext.ctx.req as any).cookies) : {theme: 'light'} 
  
  const validThemes = ['light', 'dark', 'custom']

  return {
    theme: validThemes.includes(theme) ? theme : 'dark',
  }
}