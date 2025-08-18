import {
    Container,
    Typography,
    Paper,
    InputBase,
    IconButton,
    Grid
} from "@mui/material"

import SearchIcon from '@mui/icons-material/Search'

import Card from '../../../components/Card'

const List = () => {
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

            <Container maxWidth='md' sx={{ marginTop: '20px' }}>
                <Paper sx={{ padding: '5px 10px' }}>
                    <Typography component='h2' variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                        Anúncios
                    </Typography>
                    <Typography component='h3' variant='subtitle2' >
                        ENCONTRADO 200 ANÚNCIOS
                    </Typography>
                </Paper>
            </Container>

            <Container maxWidth='md' sx={{ paddingTop: '45px' }}>

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

export default List