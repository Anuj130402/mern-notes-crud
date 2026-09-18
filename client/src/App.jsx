import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:8000/api/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all notes on mount
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get(API);
      setNotes(res.data);
    } catch (err) {
      console.error("Fetch error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a note
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    try {
      const res = await axios.post(API, { title, content });
      setNotes([res.data, ...notes]); // prepend (newest first)
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Create error:", err.message);
    }
  };

  // Delete a note
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setNotes(notes.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  return (
    <div className="container">
      <h1>Student Notes</h1>

      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>

      {loading ? (
        <p className="message">Loading notes...</p>
      ) : notes.length === 0 ? (
        <p className="message">No notes yet — add one above!</p>
      ) : (
        <div className="note-list">
          {notes.map((note) => (
            <div className="note-card" key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <span className="date">
                {new Date(note.createdAt).toLocaleString()}
              </span>
              <button
                className="delete-btn"
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;