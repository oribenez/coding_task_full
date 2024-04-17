import express, { Application } from "express";
import NoteRouter from "./routes/notes";
import UsersRouter from "./routes/users";
import cors from "cors";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

import * as path from "path";
const fs = require("fs");

const initDb = async () => {
  const dataPath = path.join(__dirname, "./database/data");
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath);
  }

  const mongod = await MongoMemoryServer.create({
    instance: {
      storageEngine: "wiredTiger",
      dbPath: dataPath,
    },
  });

  return mongoose.connect(mongod.getUri());
};
const app: Application = express();
const port = process.env.PORT || 8000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  express.json({
    limit: "2mb",
  })
);
app.use("/notes", NoteRouter);
app.use("/users", UsersRouter);

initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });
});
