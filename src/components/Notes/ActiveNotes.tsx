import { Note as TypeNote } from "../../types";
import AddNoteForm from "../AddNoteForm";
import Note from "../Note";

interface ActiveNotesProps {
  activeNotes: TypeNote[];
  addNote: (noteContent: string) => void;
}

export default function ActiveNotes({
  activeNotes,
  addNote,
}: ActiveNotesProps) {
  return (
    <>
      <AddNoteForm addNote={addNote} />
      {activeNotes.map((note, index) => (
        <Note key={index} content={note.content} />
      ))}
    </>
  );
}
