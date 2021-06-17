import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { directoryEnum } from '../enums/directory.enum';

export const DirectorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  fields: {
    type: [
      {
        type: {
          type: String,
          enum: Object.values(directoryEnum),
          required: true,
        },
        name: { type: String, required: true },
      },
    ],
    required: true,
  },
  legacy: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Directory',
        min: 1,
        required: true,
      },
    ],
    required: true,
  },
});
