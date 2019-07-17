import Note from "../models/Note";
const noteCtrl = {};

noteCtrl.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(400).send(error);
  }
};
noteCtrl.createNote = async (req, res) => {
  try {
    const newNote = new Note(req.body);
    console.log(newNote);
    await newNote.save();
    res.json(newNote);
  } catch (error) {
    res.status(400).send(error);
  }
};
noteCtrl.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(400).send(error);
  }
};
noteCtrl.updataNote = async (req, res) => {
  try {
      
    await Note.findOneAndUpdate({_id : req.params.id},req.body);
    res.json({ message: "Note Update" });
  } catch (error) {
    res.status(400).send(error);
  }
};
noteCtrl.deleteNote = async (req, res) => {
  try {
    await Note.findOneAndDelete({_id:req.params.id});
    res.json({ message: "Note Delete" });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = noteCtrl;
