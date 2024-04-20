import { FC, useEffect, useRef } from "react";
import Note from "./Note";
import styles from "./NotesGrid.module.css";
import { usePaginatedNotes } from "../API/hooks/useNotes";
import { useInView, InView } from 'react-intersection-observer';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const NotesGrid: FC = () => {
    const { data, error, fetchNextPage, isLoading } = usePaginatedNotes();
    const { ref: refNote, inView: inViewNote } = useInView({ threshold: 0.01 }); // infintie scrolling

    useEffect(() => {
        if (inViewNote) {
            console.log("inViewNote: ", inViewNote);
            fetchNextPage()
        }
    }, [inViewNote])

    return <><div className={styles.notesWrap}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 650: 2, 930: 3 }}>
            <Masonry gutter="10px">
                {!isLoading && data?.pages?.map((group, i) => (
                    group.docs.map((note) => {
                        return <InView as="div" key={note._id}><div style={{ width: 'fit-content', height: 'fit-content' }}><Note {...note} onCloseNote={() => { }} /></div></InView>
                    })
                ))}

            </Masonry>
        </ResponsiveMasonry>
        {isLoading && <>Loading...</>}
    </div>
    <div style={{ width: '100px', height: '300px' }}></div>
        <InView as="div"><div ref={refNote} style={{ width: '100px', height: '10px' }}></div></InView>
    </>;
}

export default NotesGrid;