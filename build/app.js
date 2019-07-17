"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //Settings

app.set("port", process.env.PORT || 4000); //Middleware

app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use(_express["default"].json()); //Routes

app.get('/', function (req, res) {
  res.status(200).send('API');
});
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));
module.exports = app;
//# sourceMappingURL=app.js.map