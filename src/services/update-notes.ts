export function updateNotes(newNotes: string[]) {
  localStorage.setItem("notes", JSON.stringify(newNotes));
}
