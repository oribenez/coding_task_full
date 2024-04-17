import axios from "axios";
import Note from "./Types/Note";

const BASE_URL = "http://localhost:8000/notes";

export interface NotesClient {
  getAll(): Promise<Note[] | undefined>;
}

const Notes: NotesClient = {
  getAll: async () => {
    const { data } = await axios.get<Note[]>(BASE_URL);
    return data;
  },
};

export default Notes;
