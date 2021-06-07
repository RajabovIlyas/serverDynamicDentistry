import * as mongoose from 'mongoose';

const toUpper = (v) => {
  return v.toUpperCase().split(' ').join('_').toString();
};

export const RoleAccessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  keyName: { type: String, set: toUpper, required: true },
});

RoleAccessSchema.index({ name: 1, engName: 1 }, { unique: true });
