import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roleaccess: {
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
});

RoleSchema.index({ name: 1 }, { unique: true });
