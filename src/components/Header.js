import { useState } from 'react'

import Link from 'next/link'
import { signOut, useSession } from "next-auth/react"

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

  const { data: session } = useSession()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Container maxWidth='lg'>
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>

            <Link href={session ? '/user/publish' : '/auth/signin'}>
              <Button color='secondary' variant='outlined' sx={{ marginRight: '10px' }}>
                Anunciar e vender
              </Button>
            </Link>

            {
              session
                ? (
                    <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                      <Avatar sx={{ marginRight: '10px' }} alt="Gustavo" src={session.user.image} />
                      <Typography variant='subtitle2' color='secondary'>{session.user.name}</Typography>
                    </IconButton>
                ) : null
            }



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
              <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header