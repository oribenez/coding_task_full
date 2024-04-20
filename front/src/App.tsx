import React, { useEffect } from "react";
import styles from "./App.module.css";
import NoteModel from "./API/Types/NoteModel";
import NewNote from "./components/NewNote";
import NotesGrid from "./components/NotesGrid";
// import useNotes from "./API/hooks/useNotes";
import useCreateNote from "./API/hooks/useCreateNote";
import { useInfiniteQuery } from "@tanstack/react-query";
import { usePaginatedNotes } from "./API/hooks/useNotes";


const notesListData: NoteModel[] = [
  {
    _id: "1",
    title: "title1",
    body: {
      list: [{
      id: "1_1",
      text: "lorem ipsum1",
      isChecked: true
    },
    {
      id: "1_2",
      text: "lorem ipsum1",
      isChecked: true
    },
    {
      id: "1_3",
      text: "lorem ipsum1",
      isChecked: true
    }],
    }
    ,
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "2",
    title: "title2",
    
    body: {
      list: [{
      id: "2_1",
      text: "lorem ipsum2",
      isChecked: true
    }],
      text: ''
    }
    ,
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "13",
    title: "title13",
    body: {
      list: [], 
      text: "Lorem ipsum dolor sit amet"
    },
    isCheckboxes: false,
    isPinned: true
  },
  {
    _id: "3",
    title: "title3",
    body: {list:[{
      id: "3_1",
      text: "lorem ipsum3",
      isChecked: true
    }]},
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "4",
    title: "title4",
    body: {list:[{
      id: "4_1",
      text: "lorem ipsum4",
      isChecked: true
    }]},
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "5",
    title: "title5",
    body: {list:[{
      id: "5_1",
      text: "lorem ipsum5",
      isChecked: true
    },
    {
      id: "5_2",
      text: "lorem ipsum5",
      isChecked: true
    },
    {
      id: "5_3",
      text: "lorem ipsum5",
      isChecked: true
    }]},
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "6",
    title: "title6",
    body: {list:[{
      id: "6_1",
      text: "lorem ipsum6",
      isChecked: true
    }]},
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "7",
    title: "title7",
    body: {list:[{
      id: "7_1",
      text: "lorem ipsum7",
      isChecked: true
    }]},
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "8",
    title: "title8",
    body: {list:[{
      id: "8_1",
      text: "lorem ipsum8",
      isChecked: true
    }]},
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "9",
    title: "title9",
    body: {list:[{
      id: "9_1",
      text: "lorem ipsum9",
      isChecked: true
    }]},
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "10",
    title: "title10",
    body: {list:[{
      id: "10_1",
      text: "lorem ipsum10",
      isChecked: true
    }]},
    isCheckboxes: true,
    isPinned: true
  },
  {
    _id: "11",
    title: "title11",
    body: {list: [], text:"Lorem ipsum dolor sit amet"},
    isCheckboxes: false,
    isPinned: true
  },
  {
    _id: "12",
    title: "title12",
    body: { list: [], text:"Lorem ipsum dolor sit amet"},
    isCheckboxes: false,
    isPinned: true
  }
];




function App() {
  // const { data } = useNotes();
  
  return (
    <div>
      <header className={styles.headerInnerWrap}>
        <h1 className={styles.logo}>Keep</h1>
        <div className={styles.searchWrap}>
          <input type="text" id="search bar" className={styles.searchWrap} placeholder="Search" />
        </div>
      </header>
      <article>
        <div className={styles.addNewNoteWrap}>
          <NewNote  />
        </div>

        <NotesGrid />
      </article>
    </div>
  );
}

export default App;
