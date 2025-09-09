import dBConnect from '../utils/dbConnect'
import Products from '../models/products'
import { NextResponse } from "next/server"

const GET  = async (req) => {

    await dBConnect()

    const { searchParams } = new URL(req.url)

    const id = searchParams.get("id")

    const product = await Products.findOne({ _id: id })

    if (product) {
        return NextResponse.json({
            success: true,
            product
        })
    }

    return NextResponse.json({
        success: false
    })
}

export { GET }