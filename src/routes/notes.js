import { Router } from "express";
import { getNotes,getNote,createNote,updataNote,deleteNote } from "../controllers/NoteController";
const router = Router();

router.route("/")
.get(getNotes)
.post(createNote);

router.route("/:id")
.get(getNote)
.put(updataNote)
.delete(deleteNote);
module.exports = router;
