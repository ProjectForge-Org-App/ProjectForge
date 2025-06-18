import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//* Routes
app.use('/', userRoute);

//* 404 not found error
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

//* Internal Server Error
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    dbName: 'ProjectForge',
  })
  .then(() => console.log('👌👌👌 MongoDB connected 👌👌👌'))
  .catch((err) => console.error('👎👎👎 MongoDB connection error:', err.message));

export default app;
