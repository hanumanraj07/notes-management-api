const express = require("express");
const router = express.Router();
const { createNote, createBulkNotes, getNotes, getNoteById } = require("../controllers/note.controller");

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/bulk", createBulkNotes);
router.post("/", createNote);

module.exports = router;
