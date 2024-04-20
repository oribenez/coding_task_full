import { Document, PaginateModel, Schema, Types, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';


export interface INote {
  _id: Types.ObjectId;
  title: string;
  body: {
    list: {
      id: string,
      text: string;
      isChecked: boolean;
    }[];
    text: string;
  };
  isCheckboxes: boolean;
  isPinned?: boolean;
}

const NoteSchema: Schema = new Schema({
  title: String,
  body: {
    list: [{
      id: String,
      text: String,
      isChecked: Boolean,
    }],
    text: String,
  },
  isCheckboxes: Boolean,
  isPinned: Boolean
}, { collection: "users", strict: "throw", timestamps: true });

NoteSchema.plugin(mongoosePaginate);

// declare a mongoose document based on a Typescript interface representing your schema
type NoteDocument = INote & Document;

export default model<NoteDocument, PaginateModel<NoteDocument>>("Note", NoteSchema);
