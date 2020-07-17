import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    type: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    difficutiy: {
      type: String,
      require: true,
    },
    answer: {
      type: Object,
      require: true,
    },
    content: {
      type: Object,
      require: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Hashes the users password when saving it to DB
 */

export default mongoose.model('Question', questionSchema);
