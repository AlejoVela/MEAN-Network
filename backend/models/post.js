const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  text: String,
  likes: Number,
  imageUrl: String,
  postStatus: { type: Boolean, default: true },
});

const post = mongoose.model('post', postSchema);
module.exports = post;