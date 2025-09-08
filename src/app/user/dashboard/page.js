'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import axios from 'axios'

import {
    Container,
    Typography,
    Button,
    Grid,
} from '@mui/material'

import Card from '../../../components/Card'
import ConfirmModal from '@/components/ConfirmModal'

import useToasty from '@/contexts/Toasty'

import { formatCurrency } from '@/utils/currency'


const Dashboard = () => {

    const [products, setProducts] = useState([])

    const [openConfirmModal, setOpenConfirmModal] = useState(false)

    const [productId, setProductId] = useState()

    const [removedProducts, setRemovedProducts] = useState([])

    const { setToasty } = useToasty()

    useEffect(() => {
        const getProducts = async () => {

            const response = await axios.get('/api/products')

            const { userProducts } = response.data

            setProducts(userProducts)
        }

        getProducts()
    }, [])

    const handleClickRemove = (productId) => {
        setOpenConfirmModal(true)
        setProductId(productId)
    }

    const handleClose = () => {
        setOpenConfirmModal(false)
    }

    const handleConfirmRemove = () => {
        axios.delete('/api/products', {
            data: {
                id: productId
            }
        })
            .then(handleSuccess)
            .catch(handleError)
    }

    const handleSuccess = () => {
        handleClose()

        setToasty({
            open: true,
            text: 'Produto deletado com sucesso!',
            severity: 'success'
        })

        setRemovedProducts([...removedProducts, productId])


    }

    const handleError = () => {
        setToasty({
            open: true,
            text: 'Não foi possível deletar o produto!',
            severity: 'error'
        })
    }

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
                <Link href='/user/publish'>
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
                </Link>
            </Container>
            <Container maxWidth='md'>
                {
                    products.length === 0 && 
                    <Typography component='div' variant='body1' align='center' gutterBottom>
                        Nenhum anúncio publicado!
                    </Typography>
                }
                <Grid container spacing={4}>
                    {
                        products.map(product => {

                            if (removedProducts.includes(product._id)) return null

                            return (
                                <Grid key={product._id} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <Card
                                        image={`/uploads/${product.files[0].name}`}
                                        title={product.title}
                                        subtitle={formatCurrency(product.price)}
                                        actions={
                                            <>
                                                <Button size="small" color='primary' variant='contained' >
                                                    Editar
                                                </Button>
                                                <Button onClick={() => handleClickRemove(product._id)} size="small" color='primary' variant='contained'>
                                                    Remover
                                                </Button>
                                            </>
                                        }
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
            <ConfirmModal
                open={openConfirmModal}
                handleClose={handleClose}
                handleConfirmRemove={handleConfirmRemove}
            />
        </>

    )
}

export default Dashboard