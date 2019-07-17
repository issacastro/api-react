"use strict";

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = (0, _mongoose.model)('User', userSchema);
//# sourceMappingURL=User.js.map