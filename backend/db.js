const mongoose = require('mongoose');

//
mongoose.connect("mongodb+srv://bhatt8udgeet:543255@Bhatt@cluster6.itclmze.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    descrpition: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo
}