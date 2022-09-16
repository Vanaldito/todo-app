import { useContext } from "react";
import NotesContext from "../../contexts/notes";
import AddNoteForm from "../AddNoteForm";
import Note from "../Note";

export default function ActiveNotes() {
  const { notes } = useContext(NotesContext) || {};

  return (
    <>
      <AddNoteForm />
      {notes &&
        notes.map((note, index) =>
          note.type === "active" ? (
            <Note
              key={index}
              type="active"
              content={note.content}
              index={index}
            />
          ) : null
        )}
    </>
  );
}
