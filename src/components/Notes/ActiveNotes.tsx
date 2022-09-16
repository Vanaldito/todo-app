import { useContext } from "react";
import NotesContext from "../../contexts/notes";
import AddNoteForm from "../AddNoteForm";
import Note from "../Note";

export default function ActiveNotes() {
  const { notes } = useContext(NotesContext) || {};
  const activeNotes = notes?.filter(note => note.type === "active");

  return (
    <>
      <AddNoteForm />
      {activeNotes &&
        activeNotes.map((note, index) => (
          <Note key={index} content={note.content} />
        ))}
    </>
  );
}
