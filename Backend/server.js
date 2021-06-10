import express from 'express'


const app = express();

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => res.status(200).send('Hello world') );



app.listen(PORT, () => console.log(`server is running on port ${PORT}`));



