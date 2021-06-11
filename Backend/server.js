import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCard.js'
import dotenv from 'dotenv';
import Cors from 'cors'
dotenv.config();

//App Config
const app = express()

const connection_url =`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.pcpxh.mongodb.net/tinderdb?retryWrites=true&w=majority`

//Middlewares
app.use(express.json());
app.use(Cors())


//PORT Config
const PORT = process.env.PORT || 8080;

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true,
})




//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello world') );

app.post('/tinder/cards', (req, res)=> {
    const dbCard = req.body;

    Cards.create( dbCard, (err, data)=>{
        if(err){
             res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    }
    )
   
})


app.get('/tinder/cards', (req, res) =>{

    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// Listener
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));



