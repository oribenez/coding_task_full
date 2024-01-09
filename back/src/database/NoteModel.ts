import Note from "../types/Note";
import { BaseModel } from "./BaseModel";

export class NoteModel extends BaseModel<Note> {
  constructor() {
    super("src/database/data/Notes.json");
  }

  private sortNotes(notes: Note[], sort: { [key: string]: 1 | -1 }): Note[] {
    return notes.sort((a, b) => {
      for (let key in sort) {
        const _key = key as keyof Note;
        if ((a[_key] || 0) > (b[_key] || 0)) {
          return sort[key];
        }
        if ((a[_key] || 0) < (b[_key] || 0)) {
          return -sort[key];
        }
      }
      return 0;
    });
  }

  public async search(options: { search?: string; limit?: number; skip?: number; sort?: { [key: string]: 1 | -1 } }): Promise<Note[]> {
    let data = await this.loadData();
    const search = options?.search;
    if (!!search) {
      data = data.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (!!options?.sort) {
      data = this.sortNotes(data, options.sort);
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

  public async upsert(id: string, note: Partial<Note>): Promise<Note> {
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
