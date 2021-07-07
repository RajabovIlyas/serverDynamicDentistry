import * as mongoose from 'mongoose';

export const ExecutionProcessSchema = new mongoose.Schema({
  process: {
    type: [
      {
        role: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Role',
          required: true,
        },
        name: { type: String, required: true },
      },
    ],
  },
});
