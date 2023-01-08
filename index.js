const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()


// Middleware use 
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://<username>:<password>@cluster0.w7wfspi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });






app.get('/', (req, res) => {
    res.send('Doctor Portal is Running')
})

app.listen(port, () => {
    console.log(`Backend Server ${port}`)
})