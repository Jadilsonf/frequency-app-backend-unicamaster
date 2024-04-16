import express from 'express'
import { SegundoB } from '../models/segundoB.js'

const router = express.Router()

//Route for save a new Book
router.post('/', async (req, res) => {
    try {
        if (
        !req.body.nome
        ) {
            return res.status(400).send({
                message: 'Digite o nome',
            })
        }
        const newSegundoB = {
            nome: req.body.nome,
            por1: req.body.por1,
            por2: req.body.por2,
            mat1: req.body.mat1,
            mat2: req.body.mat2,
            cie: req.body.cie,
            his: req.body.his,
            geo: req.body.geo,
            bis: req.body.bis,
        }

        const segundoB = await SegundoB.create(newSegundoB);

        return res.status(201).send(segundoB);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// Route for Get All Books from database
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({})

        return response.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        response.status(500).send({ message: error.message})
    }
})

// Route for Update a Book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.nome
        ) {
            return response.status(400).send({
                message: 'Digite o nome'
            })
        }

        const { id } = request.params

        const result = await Book.findByIdAndUpdate(id, request.body)

        if(!result){
            return response.status(404).json({ message: 'Book not found'})
        }

        return response.status(200).send({ message: 'Book updated successfully'})
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

export default router

// Route for Get All Books from database by id
// router.get('/:id', async (request, response) => {
//     try {

//         const { id } = request.params

//         const book = await Book.findById(id)

//         return response.status(200).json(book)
//     } catch (error) {
//         console.log(error.message)
//         response.status(500).send({ message: error.message})
//     }
// })