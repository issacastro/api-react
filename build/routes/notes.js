"use strict";

var _express = require("express");

var _NoteController = require("../controllers/NoteController");

var router = (0, _express.Router)();
router.route("/").get(_NoteController.getNotes).post(_NoteController.createNote);
router.route("/:id").get(_NoteController.getNote).put(_NoteController.updataNote)["delete"](_NoteController.deleteNote);
module.exports = router;
//# sourceMappingURL=notes.js.map