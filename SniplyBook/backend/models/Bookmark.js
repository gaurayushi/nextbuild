import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookmarkSchema = new Schema({
  user:    { type: Schema.Types.ObjectId, ref: 'User', required: true },
  url:     { type: String, required: true },
  title:   String,
  favicon: String,
  summary: String,
  order:   { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Bookmark', BookmarkSchema);
