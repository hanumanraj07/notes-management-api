const express = require("express");
const router = express.Router();
const { createNote, createBulkNotes, getNotes } = require("../controllers/note.controller");

router.get("/", getNotes);
router.post("/bulk", createBulkNotes);
router.post("/", createNote);

module.exports = router;
