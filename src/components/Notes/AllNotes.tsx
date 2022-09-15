import AddNoteForm from "../AddNoteForm";

interface AllNotesProps {
  notes: string[];
  addNote: (newNote: string) => void;
}

export default function AllNotes({ notes, addNote }: AllNotesProps) {
  return (
    <>
      <AddNoteForm addNote={addNote} />
      {notes.map((note, index) => (
        <div className="note" key={index}>
          <input type="checkbox" />
          <span>{note}</span>
        </div>
      ))}
    </>
  );
}
