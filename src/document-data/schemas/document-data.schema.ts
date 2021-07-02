import * as mongoose from 'mongoose';
import { documentDataStatusEnum } from '../enums/document-type.enum';
import { documentTypeEnum } from '../../document-type/enums/document-type.enum';

export const DocumentDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  documentType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DocumentType',
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
        type: { type: String, required: true },
      },
    ],
    required: true,
  },
  dataDirectory: {
    type: [
      {
        directory: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Directory',
          required: true,
        },
        nameDirectory: { type: String, required: true },
        data: {
          type: [
            {
              value: { type: String, required: true },
              name: { type: String, required: true },
              type: { type: String, required: true },
            },
          ],
        },
      },
    ],
  },
  status: {
    type: String,
    required: true,
    enum: Object.values(documentDataStatusEnum),
    default: documentDataStatusEnum.CREATED,
  },
});
