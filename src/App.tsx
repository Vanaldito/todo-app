import Notes from "./components/Notes";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1 className="app__title">#todo</h1>
      <Notes />
    </div>
  );
}
