import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

// const connection_url =`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.pcpxh.mongodb.net/tinderdb?retryWrites=true&w=majority`


const app = express();

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => res.status(200).send('Hello world') );


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));



