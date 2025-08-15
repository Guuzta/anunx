import Link from 'next/link'
import { Box, Container, Grid, Typography } from "@mui/material"

const Footer = () => {
    return (
        <>
            <Container maxWidth='lg' component='footer' sx={{ marginTop: '100px', marginBottom: '50px' }}>
                <Grid container spacing={8} sx={{ justifyContent: 'center' }}>
                    <Grid sx={{ xs: 6, sm: 3 }}>
                        <Box>
                            <Link href='#'>
                                <Typography>
                                    Ajuda e Contato
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid sx={{ xs: 6, sm: 3 }}>
                        <Box>
                            <Link href='#'>
                                <Typography>
                                    Dicas de segurança
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid sx={{ xs: 6, sm: 3 }}>
                        <Box>
                            <Link href='#'>
                                <Typography>
                                    Anunciar e Vender
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid sx={{ xs: 6, sm: 3 }}>
                        <Box>
                            <Link href='#'>
                                <Typography>
                                    Plano profissional
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Footer