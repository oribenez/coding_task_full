
export interface NoteBodyListItem {
  id?: string,
  text?: string;
  isChecked?: boolean;
}

export default interface NoteModel {
  _id?: string;
  title?: string;
  body?: {
    list?: NoteBodyListItem[];
    text?: string;
  }
  isCheckboxes: boolean;
  isPinned?: boolean;
}

export type NotesPage = {
  docs: NoteModel[],
  totalDocs?: number,
  limit?: number,
  totalPages?: number,
  page?: number,
  pagingCounter?: number,
  hasPrevPage?: boolean,
  hasNextPage?: boolean,
  prevPage?: number,
  nextPage?: number
}