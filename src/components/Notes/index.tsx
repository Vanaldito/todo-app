import { useState } from "react";
import AllNotes from "./AllNotes";
import ActiveNotes from "./ActiveNotes";
import { Note } from "../../types";
import { getNotes } from "../../services/get-notes";
import { updateNotes } from "../../services/update-notes";
import NotesContext from "../../contexts/notes";

import "./styles.css";

export default function Notes() {
  const [notes, setNotes] = useState(getNotes());

  const [noteType, setNoteType] = useState<"all" | "active" | "completed">(
    "all"
  );

  function changeNoteType(newNoteType: "all" | "active" | "completed") {
    return () => {
      setNoteType(newNoteType);
    };
  }

  function addNote(newNoteContent: string) {
    const newNotes: Note[] = [
      ...notes,
      { type: "active", content: newNoteContent },
    ];

    updateNotes(newNotes);
    setNotes(newNotes);
  }

  function toggleNoteType(noteIndex: number) {
    const newNotes = [...notes].map((note, index) => {
      if (index !== noteIndex) return note;

      const toogleType: {
        active: "completed";
        completed: "active";
      } = {
        active: "completed",
        completed: "active",
      };

      return {
        ...note,
        type: toogleType[note.type],
      };
    });

    updateNotes(newNotes);
    setNotes(newNotes);
  }

  return (
    <NotesContext.Provider
      value={{ notes, modifiers: { add: addNote, toggleType: toggleNoteType } }}
    >
      <div className="notes">
        <nav className="notes__navbar">
          <button
            className={`notes__navbar__button${
              noteType === "all" ? " notes__navbar__button--active" : ""
            }`}
            type="button"
            onClick={changeNoteType("all")}
          >
            All
          </button>
          <button
            className={`notes__navbar__button${
              noteType === "active" ? " notes__navbar__button--active" : ""
            }`}
            type="button"
            onClick={changeNoteType("active")}
          >
            Active
          </button>
          <button
            className={`notes__navbar__button${
              noteType === "completed" ? " notes__navbar__button--active" : ""
            }`}
            type="button"
            onClick={changeNoteType("completed")}
          >
            Completed
          </button>
        </nav>
        {noteType === "all" && <AllNotes />}
        {noteType === "active" && <ActiveNotes />}
      </div>
    </NotesContext.Provider>
  );
}
