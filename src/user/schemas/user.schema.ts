import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Schema } from 'mongoose';

const toLower = (v) => {
  return v.toLowerCase();
};

export const UserSchema = new mongoose.Schema({
  email: { type: String, set: toLower, required: true },
  avatar: { type: String, default: null },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true, select: false },
  role: {
    type: [
      {
        dateStart: { type: Date, default: Date.now },
        role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
        dateEnd: { type: Date, default: null },
      },
    ],
    required: true,
  },
});

UserSchema.pre('save', function (next) {
  const user: any = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.index({ email: 1 }, { unique: true });
