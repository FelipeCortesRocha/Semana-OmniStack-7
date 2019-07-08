const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:<password>@clusterinstarocket-4ou0q.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('API RODANDO');
});
