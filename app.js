const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const ejs = require('ejs');

const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageControllers');

const app = express();

mongoose
  .connect(
    'mongodb+srv://umut:LaBbjuOmI0DdwXlh@cluster0.vx2ql.mongodb.net/pcat-db?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB CONNECTED!');
  })
  .catch((error) => {
    console.log(error);
  });

//Template engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routes
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portundan baslatildi...`);
});
