require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const routes = require('../src/routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://Ashwek:test@mongodb.3krsdlp.mongodb.net/Food_app';

mongoose.connect(MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to MongoDB:', error.message);
});