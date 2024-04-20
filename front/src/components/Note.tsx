import { FC, useEffect, useState } from "react";
import styles from "./Note.module.css";
import NoteModel, { NoteBodyListItem } from "../API/Types/NoteModel";
import { useFieldArray, useForm, FormProvider, SubmitHandler } from "react-hook-form";
import NoteListItem from "./NoteListItem";
import useUpdateNote from "../API/hooks/useUpdateNote";


export type FormInputs = NoteModel;

interface NoteProps extends NoteModel {
    isNew?: boolean;
    isEdit?: boolean;
    onCloseNote: SubmitHandler<FormInputs>;
}

const Note: FC<NoteProps> = ({ _id, title, body, isCheckboxes, isPinned, isEdit, isNew, onCloseNote }) => {
    const { control, register, handleSubmit, getValues } = useForm<FormInputs>({
        defaultValues: {
            title,
            body: isNew ? {
                list: [{ text: '', isChecked: false }],
                text: ''
            } : body,
            isPinned: isPinned ?? false,
        }
    });

    const { fields, append } = useFieldArray<FormInputs>({
        name: "body.list",
        control,
    });

    const { mutateAsync: updateNote } = useUpdateNote();
    const onEditHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedNote = getValues();
        updatedNote._id = _id;
        console.log("updatedNote: ", updatedNote)

        updateNote({ note: updatedNote });
    };

    //calculate checked note list items
    let numCheckedItems = 0;
    for (const noteLI of fields) {
        if (noteLI.isChecked) numCheckedItems++;
    }

    // content is shown according to its type, list-items / plain-text
    let content: JSX.Element = <></>;
    if (isCheckboxes) {
        content = <ul className={styles.contentList}>
            {fields.map(
                (item, index) => <NoteListItem id={item.id} text={item.text} isEdit={isEdit} key={item.id} onFirstLetterType={append} {...{ register, index }} onEditHandler={isNew ? undefined : onEditHandler} /> 
            )}

        </ul>
    } else {
        if (isEdit) content = <textarea id='body' className={styles.content} placeholder="Type your note here..." {...register("body.text")} />;
        else content = <>{body?.text}</>;
    }


    return <>
        <form className={styles.card} onSubmit={isEdit ? handleSubmit(onCloseNote) : () => { }}>
            {isEdit ? <input type="text" id='title' className={styles.title} placeholder="Title" {...register("title")} />
                : <h2 className={styles.title}>{title}</h2>}

            <div className={styles.content}>{content}</div>

            {isEdit &&
                <div className={styles.actionsBar}>
                    <button type="submit">Close</button>
                </div>}
        </form>
    </>;
}

export default Note;