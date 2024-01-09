"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Welcome to Express & TypeScript Server");
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
