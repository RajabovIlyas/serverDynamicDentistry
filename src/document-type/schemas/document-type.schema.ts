import * as mongoose from 'mongoose';

const toUpper = (v) => {
  return v.toUpperCase().split(' ').join('_').toString();
};

export const DocumentTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  keyName: { type: String, set: toUpper, required: true },
  fields: { type: [String], required: true },
});

DocumentTypeSchema.index({ name: 1, keyName: 1 }, { unique: true });