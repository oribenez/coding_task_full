import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import NoteModel, { NotesPage } from "../Types/NoteModel";
import axios from "axios";
import { useMediaQuery } from "usehooks-ts";

const BASE_URL = "http://localhost:8000/notes";


const getNotes = async ({pageParam} : {pageParam: number}) : Promise<NotesPage>=> {
    const { data } = await axios.get(`${BASE_URL}?cursor=${pageParam}`);
    return data;
};

const useNotes = () => {
    return useQuery({
        queryKey: ['notes'],
        queryFn: getNotes as any
    });
}

export const usePaginatedNotes = () => {
    return useInfiniteQuery<NotesPage>({
        queryKey: ['notes'],
        queryFn: getNotes as any,
        getNextPageParam: (lastPage: NotesPage, pages: NotesPage[]) => lastPage.hasNextPage ? lastPage.nextPage : undefined,
        initialPageParam: 1,
    });
}

export default useNotes;