const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// Middleware use 
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Doctor Portal is Running')
})

app.listen(port, () => {
    console.log(`Backend Server ${port}`)
})