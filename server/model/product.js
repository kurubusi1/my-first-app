const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const ProductSchema = new Schema({
//   author: ObjectId,
  name: { type: String, require: true, max:[60, '最大60文字までです!'] },
  price: Number,
  description: String,
  Heading1Title: String,
  Heading1Text: String,
  Heading2Title: String,
  Heading2Text: String,
  Heading3Title: String,
  Heading3Text: String,
  coverImage: String,
  
});

module.exports = mongoose.model('Product', ProductSchema);