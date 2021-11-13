const express = require('express');
const path = require('path');

//creates the port where the app is displayed locally
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//loads at port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

