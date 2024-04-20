import { useMutation, useQueryClient,  } from "@tanstack/react-query";
import NoteModel from "../Types/NoteModel";
import axios from "axios";


const BASE_URL = "http://localhost:8000/notes";

const createNote = async (note: NoteModel): Promise<undefined> => {
    const { data } = await axios.post(BASE_URL, note);
    return data;
  }

const useCreateNote = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createNote,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['notes']})
        }
    });
    return mutation;
}

export default useCreateNote;