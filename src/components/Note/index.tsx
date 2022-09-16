import { useContext } from "react";
import NotesContext from "../../contexts/notes";

import "./styles.css";

interface NoteProps {
  type: "active" | "completed";
  content: string;
  index: number;
}

export default function Note({ type, content, index }: NoteProps) {
  const { modifiers } = useContext(NotesContext) || {};

  function toggleType() {
    modifiers?.toggleType(index);
  }

  return (
    <div className={`note note--${type}`} onClick={toggleType}>
      <input
        type="checkbox"
        checked={type === "completed"}
        onChange={toggleType}
      />
      <span>{content}</span>
    </div>
  );
}
