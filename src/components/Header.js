import { useState } from 'react'

import Link from 'next/link'

import {
  Container,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material'


const Header = () => {

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Container maxWidth='lg'>
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>

            <Link href='/user/publish'>
              <Button color='secondary' variant='outlined'>
                Anunciar e vender
              </Button>
            </Link>

            <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              <Avatar sx={{ marginRight: '10px' }} alt="Gustavo" src="" />
              <Typography variant='subtitle2' color='secondary'>Gustavo</Typography>
            </IconButton>

            <Menu 
              open={openUserMenu} 
              anchorEl={anchorUserMenu}
              onClose={() => setAnchorUserMenu(null)}
            >
              <Link href='/user/dashboard' >
                <MenuItem >Meus anúncios</MenuItem>
              </Link>
              <Link href='/user/publish'>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header