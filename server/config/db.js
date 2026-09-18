const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/notes_db")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB error:", err.message));
};

module.exports = connectDB;