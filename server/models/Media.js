const mongoose = require('mongoose');
const mediaSchema = new mongoose.Schema({
  filename: String,
  tags: [String],
  url: String,
  filetype: String,
  size: Number,
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
module.exports = mongoose.model('Media', mediaSchema);
