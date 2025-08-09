'use client'

import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia
} from '@mui/material'

const Dashboard = () => {
    return (
        <>
            <Container maxWidth='sm' sx={{ py: 7 }}>
                <Typography
                    component='h1'
                    variant='h3'
                    align='center'
                    sx={{
                        fontWeight: '300',
                    }}
                >
                    Dashboard
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    sx={{
                        margin: '30px auto',
                        display: 'block'
                    }}
                >
                    PUBLICAR NOVO ANÚNCIO!
                </Button>
            </Container>
            <Container maxWidth='md'>
                <Grid container spacing={4}>
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
                            <CardActions>
                                <Button size="small" color='primary' variant='contained' >
                                    Editar
                                </Button>
                                <Button size="small" color='primary' variant='contained'>
                                    Remover
                                </Button>
                            </CardActions>
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
                            <CardActions>
                                <Button size="small" color='primary' variant='contained' >
                                    Editar
                                </Button>
                                <Button size="small" color='primary' variant='contained'>
                                    Remover
                                </Button>
                            </CardActions>
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
                            <CardActions>
                                <Button size="small" color='primary' variant='contained' >
                                    Editar
                                </Button>
                                <Button size="small" color='primary' variant='contained'>
                                    Remover
                                </Button>
                            </CardActions>
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
                            <CardActions>
                                <Button size="small" color='primary' variant='contained' >
                                    Editar
                                </Button>
                                <Button size="small" color='primary' variant='contained'>
                                    Remover
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Dashboard