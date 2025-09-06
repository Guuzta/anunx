import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert';

const Toasty = ({ open, text, severity, onClose = null }) => {

    const [openToasty, setOpenToasty] = useState(open)
    
    useEffect(() => {
        setOpenToasty(open)
    }, [open])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenToasty(false)   
    }  

    if (onClose) onClose()
    
    return (
        <Snackbar open={openToasty} autoHideDuration={3000} onClose={handleClose}>
            <Alert
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {text}
            </Alert>
        </Snackbar>
    )
}

export default Toasty