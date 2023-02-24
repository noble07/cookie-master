import NextLink from 'next/link'

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
        >
          <MenuOutlined />
        </IconButton>

        <NextLink legacyBehavior href="/" passHref>
          <Link>
            <Typography variant="h6" color="white">CookieMaster</Typography>
          </Link>
        </NextLink>
        
        <div style={{ flex: 1 }}></div>

        <NextLink legacyBehavior href="/theme-changer" passHref>
          <Link>
            <Typography variant="h6" color="white">Cambiar Tema</Typography>
          </Link>
        </NextLink>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar