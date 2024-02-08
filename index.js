const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();

//set the port
const PORT = process.env.PORT || 3000;

//////////////////////////////////////
//MIDDLEWARE
//////////////////////////////////////

//options for cors
const options = {
    origin: ["http://localhost:3000", "http://localhost:5000"]
};

//use cors middleware
app.use(cors(options));

//body parser
app.use(bodyParser.json());

//////////////////////////////////////
//START LISTENING, BASE ENDPOINT
//////////////////////////////////////

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

//////////////////////////////////////
//ROUTES
//////////////////////////////////////

//pokemon
const pokemon = require('./routes/pokemon');
app.use('/pokemon', pokemon);

module.exports = {app};