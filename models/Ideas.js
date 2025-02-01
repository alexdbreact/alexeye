import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
  name: {
    type: String,
  },
  idy: {
    type: String,
    
  },
  mob: {
    type: String,
    required: [true, 'Please add your mobile number'],

  },

  job: {
    type: String,
  },
  details: {
    type: String,
    required: [true, 'Please add your proposal'],

  },
},
{
    timestamps: true
}
);

const Ideas = mongoose.models.Idea || mongoose.model('Idea', topicSchema);

export default Ideas
