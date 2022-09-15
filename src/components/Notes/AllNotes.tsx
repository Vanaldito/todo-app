import { Note } from "../../types";
import AddNoteForm from "../AddNoteForm";

interface AllNotesProps {
  notes: Note[];
  addNote: (noteContent: string) => void;
}

export default function AllNotes({ notes, addNote }: AllNotesProps) {
  return (
    <>
      <AddNoteForm addNote={addNote} />
      {notes.map((note, index) => (
        <div className="note" key={index}>
          <input type="checkbox" />
          <span>{note.content}</span>
        </div>
      ))}
    </>
  );
}
