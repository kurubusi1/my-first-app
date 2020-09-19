const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

const productRoutes = require('./routes/products');

const app = express();

const PORT = process.env.PORT || '3001';

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.initDb()
  }

)

app.use('/api/v1/products', productRoutes);

// app.get('/products', function(req, res) {
//     res.json({'success': true} )
// });

app.listen('3001', function() {
    console.log('i am running!')
});

// mongodb+srv://test:<password>@cluster0.y82mh.mongodb.net/<dbname>?retryWrites=true&w=majority