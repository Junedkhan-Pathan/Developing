const mongoose = require('mongoose');

let loginUser = new mongoose.Schema({
      _id:mongoose.Schema.Types.ObjectId,
      userName:String,
      add:String,
      email:String,
      password:String
})

module.exports = mongoose.model('users',loginUser);


