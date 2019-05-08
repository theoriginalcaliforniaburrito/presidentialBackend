const express       = require('express');
const presidentsRoutes   = require('./routes/president');
const bodyParser    = require('body-parser');
const path          = require('path');
const app           = express();
const port= 5000;

require('dotenv').config()
require('./config/db')

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use('/presidents', presidentsRoutes);
app.get('/', (req,res) => {
    res.render('contact')
})

const PORT = process.env.PORT || port

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

module.exports = app;