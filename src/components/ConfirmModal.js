import { useState } from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'

const ConfirmModal = ({ open, handleClose, handleConfirmRemove }) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Deseja realmente remover este anúncio?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ao confirmar a operação, não podera voltar atrás!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleConfirmRemove} autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ConfirmModal