const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.listen(PORT);
