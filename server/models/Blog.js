const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true,unique: true },
  description: { type: String, required: true },
 
  imageUrl: { type: String },
  
});

const BlogPost = mongoose.model('Blog', postSchema);

module.exports = BlogPost;