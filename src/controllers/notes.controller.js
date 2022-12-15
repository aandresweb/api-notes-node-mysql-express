import { pool } from "../db/index.js";

export const getNotes = async (_req, res) => {
  const [rows] = await pool.query("SELECT * FROM notes");
  res.send(rows);
};

export const getNote = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(`SELECT * FROM notes WHERE id = ?`, [id]);
  if (rows.length <= 0) {
    return res.status(204).json({
      message: "Note not found",
    });
  } else {
    res.send(rows[0]);
  }
};

export const createNote = async (req, res) => {
  const { note, active } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO notes (note, active) VALUES (?, ?)",
    [note, active]
  );
  res.send({ rows });
};

export const updateNote = (req, res) => {
  res.send("Update notes");
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  const [response] = await pool.query("DELETE FROM notes WHERE id = ?", [id]);

  if (response.affectedRows <= 0) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  res.sendStatus(204);
};
