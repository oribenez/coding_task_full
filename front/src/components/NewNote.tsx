import { FC, useState } from "react";
import styles from "./NewNote.module.css";
import { FaRegSquareCheck } from "react-icons/fa6";
import Note, { FormInputs } from "./Note";
import useCreateNote from "../API/hooks/useCreateNote";
import { SubmitHandler } from "react-hook-form";
import NoteModel from "../API/Types/NoteModel";


enum Status {
    listMode = "listMode",
    textMode = "textMode",
    off = "off"
}

const NewNote: FC = () => {
    const { mutateAsync: createNote } = useCreateNote();
    const [currStatus, setCurrStatus] = useState(Status.off);

    const addNewNoteHandler: SubmitHandler<FormInputs> = (newNote) => {
        newNote.body?.list?.pop()  // remove new row placeholder

        console.log("newNote",newNote)
        const packedNote: NoteModel = {
            ...newNote,
            isCheckboxes: currStatus === Status.listMode
        }
        if(newNote.body?.list)
            for (const item of newNote.body?.list) {
                console.log(item)
            }
           
        console.log("packedNote",packedNote)

        createNote(packedNote);

        setCurrStatus(Status.off)
    }

    if (currStatus === Status.off)
        return <div className={`${styles.card} ${styles.newNote}`}>
            <span onClick={() => setCurrStatus(Status.textMode)}>Take a note</span>
            <button className={styles.btnCkNote} onClick={() => setCurrStatus(Status.listMode)}><FaRegSquareCheck /></button>
        </div>;

    else {
        return <Note title='' isCheckboxes={currStatus === Status.listMode} isEdit isNew onCloseNote={addNewNoteHandler} />
    }
}

export default NewNote;