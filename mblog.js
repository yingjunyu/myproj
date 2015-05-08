var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   url : {type : String},
   name : {type : String}
});
module.exports = mongoose.model('mfdsinablog1', userSchema);   