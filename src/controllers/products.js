import fs from 'fs'
import mongoose from 'mongoose'
import path from 'path'
import { NextResponse } from "next/server"
import dBConnect from '../utils/dbConnect'
import Products from '../models/products'

import { getServerSession } from "next-auth"
import { nextAuthOptions } from '../app/api/auth/[...nextauth]/route'
import dbConnect from '../utils/dbConnect'

const GET = async () => {

    await dBConnect()

    const session = await getServerSession(nextAuthOptions)
    const userId = session.user.id

    const products = await Products.find()

    const lastProducts = await Products.aggregate([
        { $match: { 'user.id': userId } },
        { $sample: { size: 6 } }
    ])


    const userProducts = products.filter((product) => {
        if (product.user.id === userId) {
            return product
        }
    })

    return NextResponse.json({
        success: true,
        userProducts,
        lastProducts
    })

}

const POST = async (req) => {

    const session = await getServerSession(nextAuthOptions)

    try {
        await dBConnect()

        const formData = await req.formData()

        const title = formData.get('title')
        const category = formData.get('category')
        const description = formData.get('description')
        const price = formData.get('price')
        const name = formData.get('name')
        const email = formData.get('email')
        const phone = formData.get('phone')
        const files = formData.getAll('files')

        const filesToSave = []

        for (const file of files) {
            const timestamp = Date.now()
            const random = Math.floor(Math.random() * 9999999) + 1
            const extension = path.extname(file.name)

            const fileName = `${timestamp}_${random}${extension}`

            const bytes = await file.arrayBuffer()
            const buffer = Buffer.from(bytes)

            const uploadDir = path.join(process.cwd(), 'public', 'uploads')
            const filePath = path.join(uploadDir, fileName)

            filesToSave.push({
                name: fileName,
                path: filePath
            })

            fs.writeFileSync(filePath, buffer)
        }

        const newProduct = new Products({
            title,
            category,
            description,
            price,
            user: {
                id: session.user.id,
                name,
                email,
                phone,
                image: session.user.image
            },
            files: filesToSave
        })

        await newProduct.save()

        return NextResponse.json({
            success: true,
            message: 'Produto cadastrado com sucesso!'
        })


    } catch (error) {
        console.log(error)
    }
}

const DELETE = async (req) => {

    try {
        await dbConnect()

        const data = await req.json()

        const { id } = data

        const deleted = await Products.findOneAndDelete({ _id: id })

        if (deleted) {
            return NextResponse.json({
                success: true,
                message: 'Produto deletado com sucesso!'
            })
        }

        return NextResponse.json({
            success: false,
            message: 'Não foi possível deletar!'
        })

    } catch (error) {
        console.log(error)
    }
}

export {
    GET,
    POST,
    DELETE
}