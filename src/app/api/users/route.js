import { NextResponse } from "next/server"

import dbConnect from '../../../utils/dbConnect'
import { crypto } from '../../../utils/password'

import User from '../../../models/User'


const GET = async () => {
    
    await dbConnect()

    return NextResponse.json({
        message: 'Hello API!'
    })
}

const POST = async (req) => {
    try {

        await dbConnect()

        const {
            name,
            email,
            password
        } = await req.json()

        const hashedPassword = await crypto(password)

        const newUser = new User ({ 
            name, 
            email, 
            password: hashedPassword 
        })
        await newUser.save()

        return NextResponse.json({
            success: true,
            user: newUser
        })

    } catch (error) {

        console.log(error)
        return NextResponse.json({
            error: 'Erro ao cadastrar usuário!'
        })
    }
}

export {
    GET,
    POST
}