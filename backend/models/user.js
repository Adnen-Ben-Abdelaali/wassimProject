const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
      firstName:String,
      lastName:String,
      email:String,
      password:String,
      confirmPwd:String,
      role:String,
      avatar: String,
      
});

const user = mongoose.model('User',userSchema);

module.exports = user;