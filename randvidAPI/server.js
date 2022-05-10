require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database !"));

app.use(express.json())

const videosidRouter = require('./routes/videosid');
app.use('/videosid', videosidRouter);

app.listen(3000,  () => console.log("Server started on port 3000"));