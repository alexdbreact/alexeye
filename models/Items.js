import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
  place: {
    type: String,
    required: [true, 'Please provide the book title.'],
  },
  sort: {
    type: String,
    required: [true, 'Please provide the book author.'],
  },
  image: {
    type: String,
  },

  flag: {
    type: String,
  },
  mob: {
    type: String,
  },
},
{
    timestamps: true
}
);

const Items = mongoose.models.Item || mongoose.model('Item', topicSchema);

export default Items