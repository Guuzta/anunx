import mongoose from 'mongoose'

const filesSchema = new mongoose.Schema({
    name: String,
    path: String
})

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'O campo "Título do Anúncio" é obrigatório!']
    },
    category: {
        type: String,
        required: [true, 'O campo "Categoria" é obrigatório!']
    },
    description: {
        type: String,
        required: [true, 'O campo "Descrição" é obrigatório!']
    },
    price: {
        type: Number,
        required: [true, 'O campo "Preço" é obrigatório!']
    },
    user: {
        id: String,
        name: String,
        email: String,
        phone: String,
        image: String
    },
    files: {
        type: [filesSchema],
        default: undefined
    } 

})

export default mongoose.models.Products || mongoose.model('Products', ProductSchema)