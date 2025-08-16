'use client'

import {
    Container,
    Typography,
    Button,
    Grid,
} from '@mui/material'

import Card from '../../../components/Card'

const Dashboard = () => {
    return (
        <>
            <Container maxWidth='sm'>
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
                        <Card
                            image='https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg'
                            title='Produto'
                            subtitle='R$ 10,90'
                            actions={
                                <>
                                    <Button size="small" color='primary' variant='contained' >
                                        Editar
                                    </Button>
                                    <Button size="small" color='primary' variant='contained'>
                                        Remover
                                    </Button>
                                </>
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card
                            image='https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg'
                            title='Produto'
                            subtitle='R$ 10,90'
                            actions={
                                <>
                                    <Button size="small" color='primary' variant='contained' >
                                        Editar
                                    </Button>
                                    <Button size="small" color='primary' variant='contained'>
                                        Remover
                                    </Button>
                                </>
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card
                            image='https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg'
                            title='Produto'
                            subtitle='R$ 10,90'
                            actions={
                                <>
                                    <Button size="small" color='primary' variant='contained' >
                                        Editar
                                    </Button>
                                    <Button size="small" color='primary' variant='contained'>
                                        Remover
                                    </Button>
                                </>
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card
                            image='https://i.ytimg.com/vi/oh5YvNgw7o8/maxresdefault.jpg'
                            title='Produto'
                            subtitle='R$ 10,90'
                            actions={
                                <>
                                    <Button size="small" color='primary' variant='contained' >
                                        Editar
                                    </Button>
                                    <Button size="small" color='primary' variant='contained'>
                                        Remover
                                    </Button>
                                </>
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Dashboard