import { NextResponse } from "next/server"
import dbConnect from '../../../utils/dbConnect'

export async function GET () {
    
    await dbConnect()

    return NextResponse.json({
        message: 'Hello API!'
    })
}