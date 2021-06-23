import * as mongoose from 'mongoose';

export const DocumentDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  data: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        value: { type: String, required: true },
      },
    ],
    required: true,
  },
  dataDirectory: {
    type: [
      {
        directory: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        nameDirectory: { type: String, required: true },
        data: {
          type: [
            {
              value: { type: String, required: true },
              name: { type: String, required: true },
            },
          ],
        },
      },
    ],
  },
});
