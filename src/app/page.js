'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import slugify from "slugify"
import { useRouter } from "next/navigation"

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

import { formatCurrency } from "@/utils/currency"

export default function Home() {

  const router = useRouter()

  const [products, setProducts] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('/api/products')

      const { lastProducts } = response.data

      setProducts(lastProducts)
    }

    getProducts()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    router.push(`search?query=${search}`)
  }

  return (
    <>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h4' align='center'>
          O que deseja encontrar?
        </Typography>
        <Paper sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <form onSubmit={handleSubmit}>
            <InputBase
              placeholder="Ex.: Escreva um produto que deseja encontrar"
              sx={{ padding: '5px 10px' }}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              fullWidth
            />
          </form>
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
          {
            products.map(product => {
              const category = slugify(product.category).toLowerCase()
              const title = slugify(product.title).toLowerCase()

              return (
                <Grid key={product._id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Link href={`/${category}/${title}/${product._id}`}>
                    <Card
                      image={`/uploads/${product.files[0].name}`}
                      title={product.title}
                      subtitle={formatCurrency(product.price)}
                    />
                  </Link>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </>
  )
}
