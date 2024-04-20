import { Request, Response } from "express";
import NotesModel, { INote } from "../database/models/NoteModel";

const notesController = {
  getNotes: async (req: Request, res: Response) => {
    const cursor = Number(req.query.cursor) || 1;
    try{
      const notes = await NotesModel.paginate({}, { page: cursor, limit:10 })
      console.log(notes)
      res.json(notes);

    }catch(err){
      //TODO: handle error correctly
      console.log(err)
    }
  },

  createNote: async (req: Request, res: Response) => {
    const data = req.body || {};
    console.log(data.body.list)
    const newNote = new NotesModel(data);
    await newNote.save();

    res.status(201).json({ success: true });
  },
  updateNote: async (req: Request, res: Response) => {
    const data: INote = req.body || {};
    const { _id } = data;
    console.log(data)
    const newNote = await NotesModel.updateOne({ _id }, data)

    res.status(201).json({ success: true });
  }
};

export default notesController;
