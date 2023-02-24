import { ChangeEvent, useState } from 'react'
import { Layout } from '@/components/layouts'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

const ThemeChangerpage = () => {

  const [currentTheme, setCurrentTheme] = useState('light')

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setCurrentTheme(e.target.value)
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

export default ThemeChangerpage