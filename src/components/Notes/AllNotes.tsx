import { useContext } from "react";
import NotesContext from "../../contexts/notes";
import AddNoteForm from "../AddNoteForm";
import Note from "../Note";

export default function AllNotes() {
  const { notes } = useContext(NotesContext) || {};

  return (
    <>
      <AddNoteForm />
      {notes &&
        notes.map((note, index) => (
          <Note
            type={note.type}
            content={note.content}
            index={index}
            key={index}
          />
        ))}
    </>
  );
}
