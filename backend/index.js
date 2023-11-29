import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import { registerValidation } from './validtaions/auth.js';
import user from './models/user.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js'





mongoose.connect('mongodb+srv://admin:admin@cluster0.26jq1ww.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('DB Ok'))
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
app.use(cors());

app.post('/auth/login', UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.post('/auth/me', checkAuth, UserController.getMe);


app.listen(4444, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server OK');
});
