import { Request, Response } from "express";
import NotesModel from "../database/models/NoteModel";

const notesController = {
  getNotes: async (req: Request, res: Response) => {
    const notes = await NotesModel.find({});
    res.json(notes);
  },
};

export default notesController;
