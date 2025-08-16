'use client'

import {
  Paper,
  Container,
  IconButton,
  InputBase,
  Typography,
  Grid
} from "@mui/material"

import SearchIcon from '@mui/icons-material/Search'

import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h4' align='center'>
          O que deseja encontrar?
        </Typography>
        <Paper sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <InputBase
            placeholder="Ex.: Escreva um produto que deseja encontrar"
            sx={{ padding: '5px 10px' }}
            fullWidth
          ></InputBase>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth='md' sx={{ paddingTop: '45px' }}>
        <Typography component='h2' variant='h4' align='center' gutterBottom>
          Destaques
        </Typography>

        <Grid container spacing={4} >
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              image='https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg'
              title='Produto'
              subtitle='R$ 20,90'
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              image='https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg'
              title='Produto'
              subtitle='R$ 20,90'
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              image='https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg'
              title='Produto'
              subtitle='R$ 20,90'
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
