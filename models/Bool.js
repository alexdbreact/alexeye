import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
  place: {
    type: String,
    required: [true, 'Please provide the book title.'],
  },
  know: {
    type: String,
    required: [true, 'Please provide the book author.'],
  },
  near: {
    type: String,
    required: [true, 'Please provide the book author.'],

  },
  service: {
    type: String,
    required: [true, 'Please provide the book author.'],

  },
  comment: {
    type: String,
  },

  price: {
    type: String,
    required: [true, 'Please provide the book author.'],

  },
  mob: {
    type: String,
  },
},
{
    timestamps: true
}
);

const Bool = mongoose.models.Bool || mongoose.model('Bool', topicSchema);

export default Bool