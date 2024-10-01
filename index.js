require('dotenv').config()
const express = require('express')
const {config} = require('./src/helper/configuration')
const mongoose = require('mongoose')

const app = express();

const {PORT, DATABASE, URI} = config(process.env);

mongoose.connect(DATABASE)
.then(res => console.log(`Connected to ${DATABASE}`))
.catch(err => console.log(err))

app.listen(PORT, ()=> {
	console.log(`Server running at ${URI}`);
})
