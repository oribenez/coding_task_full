import { Schema, Types, model } from "mongoose";

interface Note {
  _id: Types.ObjectId;
  title: string;
}

const NoteSchema: Schema = new Schema({ title: String }, { collection: "users", strict: "throw", timestamps: true });

const NotesModel = model<Note>("Note", NoteSchema);

module.exports = NotesModel;
export default NotesModel;
