import express from 'express'
import { Book7 } from '../models/bookModel7.js'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        if (
        !req.body.nome
        ) {
            return res.status(400).send({
                message: 'Digite o nome',
            })
        }
        const newBook = {
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

        const book = await Book7.create(newBook);

        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

router.get('/', async (request, response) => {
    try {
        const books = await Book7.find({})

        return response.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        response.status(500).send({ message: error.message})
    }
})

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

        const result = await Book7.findByIdAndUpdate(id, request.body)

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
