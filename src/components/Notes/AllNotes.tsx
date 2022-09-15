import { Note as TypeNote } from "../../types";
import AddNoteForm from "../AddNoteForm";
import Note from "../Note";

interface AllNotesProps {
  notes: TypeNote[];
  addNote: (noteContent: string) => void;
}

export default function AllNotes({ notes, addNote }: AllNotesProps) {
  return (
    <>
      <AddNoteForm addNote={addNote} />
      {notes.map((note, index) => (
        <Note content={note.content} key={index} />
      ))}
    </>
  );
}
