import express from 'express';
import { connectDB } from './db/connectDB.js';

const app = express();

const host = '0.0.0.0';
const port = process.env.PORT || 3000;


// ensure that server runs only if the db connect succesfully
connectDB()
  .then(() => {
    app.listen(port, host, () => {
      console.log(`server running on port ${port}...`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to database:', err);
  });
       