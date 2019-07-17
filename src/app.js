import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();


//Settings
app.set("port", process.env.PORT || 4000);


//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users',require('./routes/users'));
app.use('/api/notes',require('./routes/notes'));


module.exports = app;