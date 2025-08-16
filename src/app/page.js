'use client'

import {
  Card,
  CardMedia,
  CardContent,
  Paper,
  Container,
  IconButton,
  InputBase,
  Typography,
  Grid
} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

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

      <Container maxWidth='lg' sx={{ paddingTop: '45px' }}>
        <Typography component='h2' variant='h4' align='center' gutterBottom>
          Destaques
        </Typography>

        <Grid container spacing={12} >
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg"
                title="random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Produto
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  R$ 30,90
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg"
                title="random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Produto
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  R$ 30,90
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg"
                title="random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Produto
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  R$ 30,90
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg"
                title="random image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Produto
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  R$ 30,90
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
