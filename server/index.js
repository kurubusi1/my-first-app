const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser')

const config = require('./config');
const FakeDb = require('./fake-db');

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || '3001';

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () => {
    if(process.env.NODE_ENV !== 'production') {
      const fakeDb = new FakeDb()
      // fakeDb.initDb()
    }
  }
)

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);

if(process.env.NODE_ENV === 'production') {
  const appPath = path.join( __dirname, "..", "dist","my-first-app")
  app.use(express.static(appPath))
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}




// app.get('/products', function(req, res) {
//     res.json({'success': true} )
// });

app.listen(PORT, function() {
    console.log('i am running!')
});

// mongodb+srv://test:<password>@cluster0.y82mh.mongodb.net/<dbname>?retryWrites=true&w=majority