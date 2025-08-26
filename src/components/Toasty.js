import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Toasty = ({ open, text, severity, onClose = null }) => {

   
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }


    }

    if (onClose) onClose()

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
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