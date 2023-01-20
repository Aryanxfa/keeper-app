const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());


//Connect to MongoDB
try {
  const conn = mongoose.connect('mongodb+srv://notes:notes@cluster0.xe8wgrs.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  console.log(`Mongodb connected successfully`);
} catch (e) {
  console.log("Mongodb connection failed.", e);
}
//Create Schema and Model
const NotesSchema = mongoose.Schema({
  title: String,
  content: String,
})
const notesModel = mongoose.model('notes', NotesSchema);
app.get('/', (req, res) => {
  res.json({ messsage: "home" });
})

app.get('/notes', async (req, res) => {
  await notesModel.find({}).then((note) => {
    res.json(note);
  }).catch((e) => {
    res.json({ message: "error" });
  })
})

app.post('/notes', (req, res) => {
  const notes = new notesModel({
    title: req.body.title,
    content: req.body.content
  })
  notes.save().then((note) => {
    res.json(note);
  }).catch((err) => {
    res.json(err);
  })
});


app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`))