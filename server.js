const { urlencoded } = require('body-parser');
const express = require('express')
const { application } = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

//parse incoming string or array data 
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// makes the public file readily available to the server without using a server endpoint
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`API server now listening on port ${PORT}!`);
});



