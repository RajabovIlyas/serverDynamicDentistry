import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roleAccess: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'RoleAccess',
        min: 1,
        required: true,
      },
    ],
    required: true,
  },
  documentAccess: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'DocumentType',
        min: 1,
        required: true,
      },
    ],
    required: true,
  },
});

RoleSchema.index({ name: 1 }, { unique: true });
