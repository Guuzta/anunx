import dBConnect from '../utils/dbConnect'
import Products from '../models/products'
import { NextResponse } from "next/server"


const GET  = async (req) => {

    await dBConnect()

    const { searchParams } = new URL(req.url)

    const query = searchParams.get('query')

    const products = await Products.find({
        $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' }  }
        ]
    })

    return NextResponse.json({
        success: true,
        products
    })
}

export { GET }