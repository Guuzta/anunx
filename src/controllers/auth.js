import { NextResponse } from "next/server"

import dbConnect from '../utils/dbConnect'
import { compare } from '../utils/password'

import Users from '../models/User'

const POST = async (req) => {
    try {

        await dbConnect()

        const {
            email,
            password
        } =  await req.json()

        const user = await Users.findOne({ email })

        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'Invalido!'
            })
        }

        const passwordIsCorrect = await compare(password, user.password)
 
        if (passwordIsCorrect) {
            return NextResponse.json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        }

        return NextResponse.json({
            success: false,
            message: 'Inválido!'
        })

    } catch (error) {
        console.log('ERRO INTERNO!')
        return NextResponse.json({
            success: false,
            message: 'Erro interno'
        })
    }
}

export {
    POST
}