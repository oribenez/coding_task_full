import React from "react";
import Note from "./API/Notes";

function App() {
  return (
    <div>
      <button
        onClick={async () => {
          try {
            let data = await Note.search({ limit: 10 });
            console.log(data);
            const id = data[0]._id;
            data[0].title = "yuval";
            await Note.upsertNote(data[0]._id, data[0]);
            const data2 = await Note.get(id);
            console.log(data2);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Click
      </button>
      <header>
        <p>Start coding</p>
      </header>
    </div>
  );
}

export default App;
