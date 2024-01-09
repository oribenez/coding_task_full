import Note from "../types/Note";
import { BaseModel } from "./BaseModel";

export class NoteModel extends BaseModel<Note> {
  constructor() {
    super("src/database/data/Notes.json");
  }

  public async search(options: { search?: string; limit?: number; skip?: number }): Promise<Note[]> {
    let data = await this.loadData();
    const search = options?.search;
    if (!!search) {
      data = data.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (!!options?.skip) {
      data = data.slice(options.skip);
    }
    if (!!options?.limit) {
      data = data.slice(0, options.limit);
    }
    await this.onFinish(data);

    return data;
  }

  public async get(id: string): Promise<Note | undefined> {
    const data = await this.loadData();
    const note = data.find((note) => note._id === id);

    await this.onFinish(note ? [note] : []);

    return note;
  }

  public async create(note: Note): Promise<Note> {
    const data = await this.loadData();
    data.push(note);
    await this.saveData(data);
    await this.onFinish([note]);

    return note;
  }

  public async updateOrCreate(id: string, note: Partial<Note>): Promise<Note> {
    const data = await this.loadData();
    const index = data.findIndex((note) => note._id === id);
    if (index === -1) {
      data.push({ ...(note as Note), _id: id });
    } else {
      data[index] = { ...data[index], ...note };
    }
    await this.saveData(data);
    await this.onFinish([data[index]]);

    return data[index];
  }
}
