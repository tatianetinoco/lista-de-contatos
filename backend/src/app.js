const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contatoRoutes = require('./routes/contatoRoutes');

const app = express(); 

app.use(cors());
app.use(bodyParser.json()); 
app.use('/api/contatos', contatoRoutes); 

module.exports = app;
