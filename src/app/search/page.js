'use client'

import { useEffect, useState } from "react"
import axios from "axios"

import { useSearchParams } from "next/navigation"

import { formatCurrency } from "@/utils/currency"

import {
    Container,
    Typography,
    Paper,
    InputBase,
    IconButton,
    Grid
} from "@mui/material"

import SearchIcon from '@mui/icons-material/Search'

import Card from '../../components/Card'

const List = () => {

    const [products, setProducts] = useState([])

    const searchParams = useSearchParams()
    const query = searchParams.get('query')

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(`/api/products/query?query=${query}`)

            const { products } = response.data

            setProducts(products)
        }

        getProducts()
    }, [])

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
                    {
                        products.map(product => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <Card
                                    image={`/uploads/${product.files[0].name}`}
                                    title={product.title}
                                    subtitle={formatCurrency(product.price)}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default List