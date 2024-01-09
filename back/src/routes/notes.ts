import express from "express";
import { NoteModel } from "../database/NoteModel";
var router = express.Router();

const notesModel = new NoteModel();

/* GET home page. */
router.get("/.search", async (req, res, next) => {
  const { search, limit, skip } = req.query as unknown as { search: string; limit: number; skip: number };
  const result = await notesModel.search({ search, limit: limit, skip: skip });
  console.log("here", result);
  return res.json(result);
});
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await notesModel.get(id);
  if (!result) {
    return res.status(404).send();
  } else {
    return res.json(result);
  }
});
router.put("/:id", async (req, res, next) => {
  const note = req.body;
  const { id } = req.params;
  const result = await notesModel.upsert(id, note);
  res.status(201).send(result);
});

export default router;
