import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const dbPath = `${__dirname}/contacts.sqlite`;
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("SQLite open error:", err.message);
    process.exit(1);
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      service TEXT NOT NULL,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );
});

app.get("/api/contacts", (req, res) => {
  db.all("SELECT * FROM contacts ORDER BY created_at DESC", (err, rows) => {
    if (err) {
      console.error("SQLite query error:", err.message);
      return res.status(500).json({ error: "Unable to fetch contacts." });
    }
    res.json(rows);
  });
});

app.post("/api/contacts", (req, res) => {
  const { name, phone, email, service, message } = req.body;

  if (!name || !phone || !service) {
    return res.status(400).json({ error: "Name, phone, and service are required." });
  }

  const stmt = db.prepare(
    `INSERT INTO contacts (name, phone, email, service, message)
     VALUES (?, ?, ?, ?, ?)`
  );

  stmt.run(name, phone, email || "", service, message || "", function (err) {
    if (err) {
      console.error("SQLite insert error:", err.message);
      return res.status(500).json({ error: "Unable to save contact request." });
    }

    res.status(201).json({ id: this.lastID, name, phone, email, service, message });
  });

  stmt.finalize();
});

app.listen(PORT, () => {
  console.log(`Contact server running: http://localhost:${PORT}`);
});
