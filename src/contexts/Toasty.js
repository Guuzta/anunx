'use client'

import { createContext, useContext, useState } from 'react'

import Toasty from '../components/Toasty'

const ToastyContext = createContext({})

export const ToastyProvider = ({ children }) => {
    const [toasty, setToasty] = useState({
        open: false,
        text: '',
        severity: 'info',
    })

    return (
        <ToastyContext.Provider value={{ setToasty }}>
            <Toasty
                open={toasty.open}
                text={toasty.text}
                severity={toasty.severity}
            />
            {children}
        </ToastyContext.Provider>
    )
}

const useToasty = () => useContext(ToastyContext)

export default useToasty