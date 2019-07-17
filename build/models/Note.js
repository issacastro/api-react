"use strict";

var _mongoose = require("mongoose");

var noteSchema = new _mongoose.Schema({
  title: String,
  description: {
    type: String,
    require: true
  },
  author: String
}, {
  timestamps: true
});
module.exports = (0, _mongoose.model)('Note', noteSchema);
//# sourceMappingURL=Note.js.map