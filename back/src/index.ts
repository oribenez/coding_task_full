import express, { Express, Request, Response, Application } from "express";
import NoteRouter from "./routes/notes";
import cors from "cors";

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

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
