export function getNotes(): string[] {
  const notes = localStorage.getItem("notes");

  return notes ? JSON.parse(notes) : [];
}
