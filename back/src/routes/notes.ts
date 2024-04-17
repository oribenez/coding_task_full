import express from "express";
import notesController from "../controllers/notes";
var router = express.Router();

router.get("/", notesController.getNotes);
export default router;
