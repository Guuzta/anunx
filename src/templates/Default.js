'use client'

import { Box } from '@mui/material'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Default = ({ children }) => {
    return (
        <>
            <Header />
            <Box sx={{ marginTop: '50px', marginBottom: '50px' }}>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default Default