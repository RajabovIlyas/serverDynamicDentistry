import * as mongoose from 'mongoose';
import { documentTypeEnum } from '../enums/document-type.enum';

const toUpper = (v) => {
  return v.toUpperCase().split(' ').join('_').toString();
};

export const DocumentTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  keyName: { type: String, set: toUpper, required: true },
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
});

DocumentTypeSchema.index({ name: 1, keyName: 1 }, { unique: true });
