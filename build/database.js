"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/test';

_mongoose["default"].connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

var connection = _mongoose["default"].connection;
connection.once('open', function () {
  console.log('DB is connected');
});
//# sourceMappingURL=database.js.map