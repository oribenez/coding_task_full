import { FC, useState } from "react";
import styles from "./NoteListItem.module.css";
import { UseFormRegister, UseFieldArrayAppend,  } from "react-hook-form";
import { FormInputs } from "./Note";
import { NoteBodyListItem } from "../API/Types/NoteModel";
import useUpdateNote from "../API/hooks/useUpdateNote";

interface NoteListItemProps extends NoteBodyListItem {
    isEdit?: boolean;
    onFirstLetterType?: UseFieldArrayAppend<FormInputs>;
    onEditHandler?: (event : React.ChangeEvent<HTMLInputElement>) => void;
    register: UseFormRegister<FormInputs>;
    index: any ;
}

const NoteListItem: FC<NoteListItemProps> = ({ id, text, isEdit, onFirstLetterType, onEditHandler, register, index }) => {
    const [firstLetterTyped, setFirstLetterTyped] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length === 1 && !firstLetterTyped) {
            //   console.log('First letter typed:', inputValue);
            setFirstLetterTyped(true);
            onFirstLetterType?.({ text: '', isChecked: false }, {focusIndex: index})
        }
    };

    return <li key={id}>
        <input id={`ck_${id}`} type="checkbox" {...register(`body.list.${index}.isChecked`, {
            onChange(event) {
                if (onEditHandler)
                    onEditHandler(event);
            },
        })} />
        {isEdit ? <input type='text' placeholder='List item' {...register(`body.list.${index}.text`, {
            onChange(event) {
                handleInputChange(event);
            },
        })} className={styles.isEdit} />
            : <label htmlFor={`ck_${id}`} key={id}>{text}</label>}
    </li>;
}

export default NoteListItem;