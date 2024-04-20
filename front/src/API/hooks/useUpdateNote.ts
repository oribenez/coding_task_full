import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import NoteModel, { NotesPage } from "../Types/NoteModel";
import axios from "axios";

const BASE_URL = "http://localhost:8000/notes";

const updateNote = async ({note} : {note: NoteModel}) : Promise<NotesPage>=> {
    const { data } = await axios.patch(BASE_URL, note);
    return data;
};


const useUpdateNote = () => {

    return useMutation({
        mutationFn: updateNote,
    });
}
export default useUpdateNote;