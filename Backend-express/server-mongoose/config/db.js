const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ravalijntuhcej:Lovely521@in-aws.vrhcy.mongodb.net/JEWELLARY?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')