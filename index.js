import express, { request } from "express"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import 'dotenv/config' 
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors())

app.use('/books', booksRoute)

mongoose.connect(process.env.MONGO_SECRET)
        .then(() => {
        console.log('App connected to database')
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`)
        })
        })
        .catch((error) => {
        console.log(error)
    })