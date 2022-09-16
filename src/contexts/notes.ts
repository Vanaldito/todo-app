import { createContext } from "react";
import { Note } from "../types";

interface NotesContext {
  notes: Note[];
  modifiers: {
    add: (noteContent: string) => void;
    toggleType: (noteIndex: number) => void;
    delete: (noteIndex: number) => void;
    deleteAll: () => void;
  };
}

const NotesContext = createContext<NotesContext | null>(null);

export default NotesContext;
