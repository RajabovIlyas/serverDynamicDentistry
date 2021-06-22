import * as mongoose from 'mongoose';
import { documentTypeEnum } from '../enums/document-type.enum';

export const DocumentTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fields: {
    type: [
      {
        type: {
          type: String,
          enum: Object.values(documentTypeEnum),
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
        directory: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Directory',
          required: true,
        },
        name: { type: String, required: true },
      },
    ],
    required: true,
  },
});

DocumentTypeSchema.index({ name: 1 }, { unique: true });
