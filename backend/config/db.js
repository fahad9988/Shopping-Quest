const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true);


const connections = mongoose.connect("mongodb+srv://mohammadsahil90a:mohammadsahil901@cluster0.z9eg1ua.mongodb.net/amazon?retryWrites=true&w=majority")



module.exports = {
    connections
}