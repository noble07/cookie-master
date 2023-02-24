import { ChangeEvent, useState } from 'react'
import { GetServerSideProps } from 'next'

import { Layout } from '@/components/layouts'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'

const ThemeChangerpage: React.FC = (props) => {

  console.log({props})

  const [currentTheme, setCurrentTheme] = useState('light')

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const selectedTheme = e.target.value
    setCurrentTheme(selectedTheme)

    Cookies.set('theme', selectedTheme)
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={onThemeChange}
            >
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel value="custom" control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  
  const { theme = 'light', name = 'No name' } = req.cookies
  
  return {
    props: {
      theme,
      name
    }
  }
}

export default ThemeChangerpage