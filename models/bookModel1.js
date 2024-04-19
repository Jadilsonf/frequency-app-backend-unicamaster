import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: false,
        },
        por1: {
            type: Boolean,
            required: false
        },
        por2: {
            type: Boolean,
            required: false
        },
        mat1: {
            type: Boolean,
            required: false
        },
        mat2: {
            type: Boolean,
            required: false
        },
        cie: {
            type: Boolean,
            required: false
        },
        his: {
            type: Boolean,
            required: false
        },
        geo: {
            type: Boolean,
            required: false
        },
        bis: {
            type: Boolean,
            required: false
        },
        devolutiva: {
            type: Boolean,
            required: false
        }
    },
    {
        timestamps: true,
    }

)

export const Book1 = mongoose.model('Book1', bookSchema);