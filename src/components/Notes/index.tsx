import { useState } from "react";
import AllNotes from "./AllNotes";
import { Note } from "../../types";
import { getNotes } from "../../services/get-notes";
import { updateNotes } from "../../services/update-notes";

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

  return (
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
      {noteType === "all" && <AllNotes notes={notes} addNote={addNote} />}
    </div>
  );
}
