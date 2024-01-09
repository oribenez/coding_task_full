import express, { Express, Request, Response, Application } from "express";
import NoteRouter from "./routes/notes";
// import * as fs from "fs/promises";
// const notesArray = [];
// function getRandomNumber(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let i = 1; i <= 10000; i++) {
//   const bodyLength = getRandomNumber(3, 40);
//   const body = [];

//   for (let j = 1; j <= bodyLength; j++) {
//     body.push({
//       text: `Body text ${j} for note ${i}`,
//       isChecked: j % 2 === 0,
//     });
//   }
//   const note = {
//     _id: `note_${i}`,
//     title: `Title ${i}`,
//     body: body,
//     isCheckboxes: i % 3 === 0,
//   };

//   notesArray.push(note);
// }
// fs.writeFile("src/database/data/Notes.json", JSON.stringify(notesArray));

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(
  express.json({
    limit: "2mb",
  })
);
app.use("/notes", NoteRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
