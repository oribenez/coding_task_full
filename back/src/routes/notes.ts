import express from "express";
import notesController from "../controllers/notes";
var router = express.Router();

router.get("/", notesController.getNotes);
router.post("/", notesController.createNote);
router.patch("/", notesController.updateNote);

export default router;
