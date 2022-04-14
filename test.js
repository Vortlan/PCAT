const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//conne DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo

/*Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
});*/

/*//read a photo
Photo.find({}, (err, data) => {
  console.log(data);
});*/

//update photo
/*const id = '6258409eec4c6db10f406ad0';
Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 1 updated 2',
    description: 'Photo description updated 2',
  },
  { new: true },
  (err, data) => {
    console.log(data);
  }
);*/

//Delete a photo
const id = '62584177186c59b55435c502';
Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed');
});
