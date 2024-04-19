import express, { request } from "express"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import booksRoute1 from "./routes/booksRoute1.js"
import booksRoute2 from "./routes/booksRoute2.js"
import booksRoute3 from "./routes/booksRoute3.js"
import booksRoute4 from "./routes/booksRoute4.js"
import booksRoute5 from "./routes/booksRoute5.js"
import booksRoute6 from "./routes/booksRoute6.js"
import booksRoute7 from "./routes/booksRoute7.js"
import 'dotenv/config' 
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors())

app.use('/books', booksRoute)
app.use('/books1', booksRoute1)
app.use('/books2', booksRoute2)
app.use('/books3', booksRoute3)
app.use('/books4', booksRoute4)
app.use('/books5', booksRoute5)
app.use('/books6', booksRoute6)
app.use('/books7', booksRoute7)


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