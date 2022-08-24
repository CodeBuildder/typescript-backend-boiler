import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/db.connect";
connectDB()

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req:Request, res: Response, next:NextFunction) => {
  res.json('worked')
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
  });