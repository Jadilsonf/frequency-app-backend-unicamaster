import express from 'express'
import { Book } from '../models/bookModel.js'

const router = express.Router()

//Route for save a new Book
router.post('/', async (req, res) => {
    try {
        if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send all requred fields: title, author, publishYear',
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook);

        return res.status(201).send(book);
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

// Route for Get All Books from database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params

        const book = await Book.findById(id)

        return response.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message})
    }
})

// Route for Update a Book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all requred fields: title, author, publishYear'
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

//Route for Delete a Book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params

        const result = await Book.findByIdAndDelete(id)

        if(!result){
            return response.status(404).json(({message: 'Book not Found'}))
        }

        return response.status(200).send({message: 'Book deleted succesfully'})

    
    }
    catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

export default router