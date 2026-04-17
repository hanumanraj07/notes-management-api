const mongoose = require("mongoose");
const Note = require("../models/note.model.js");

const createNote = async (req, res) => {
    try {
        const { title, content, category, isPinned } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required",
                data: null
            });
        }

        const note = await Note.create({ title, content, category, isPinned });

        return res.status(201).json({
            success: true,
            message: "Note created successfully",
            data: note
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error",
            data: null
        });
    }
};

module.exports = {
    createNote,
    createBulkNotes: async (req, res) => {
        try {
            const { notes } = req.body;

            if (!notes || !Array.isArray(notes) || notes.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Notes array is missing or empty",
                    data: null
                });
            }

            const insertedNotes = await Note.insertMany(notes);

            return res.status(201).json({
                success: true,
                message: `${insertedNotes.length} notes created successfully`,
                data: insertedNotes
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || "Internal server error",
                data: null
            });
        }
    },
    getNotes: async (req, res) => {
        try {
            const notes = await Note.find();

            return res.status(200).json({
                success: true,
                message: "Notes fetched successfully",
                data: notes
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || "Internal server error",
                data: null
            });
        }
    },
    getNoteById: async (req, res) => {
        try {
            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid note ID format",
                    data: null
                });
            }

            const note = await Note.findById(id);

            if (!note) {
                return res.status(404).json({
                    success: false,
                    message: "Note not found",
                    data: null
                });
            }

            return res.status(200).json({
                success: true,
                message: "Note fetched successfully",
                data: note
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || "Internal server error",
                data: null
            });
        }
    },
    replaceNote: async (req, res) => {
        try {
            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid note ID format",
                    data: null
                });
            }

            const note = await Note.findByIdAndUpdate(
                id,
                req.body,
                { new: true, overwrite: true, runValidators: true }
            );

            if (!note) {
                return res.status(404).json({
                    success: false,
                    message: "Note not found",
                    data: null
                });
            }

            return res.status(200).json({
                success: true,
                message: "Note replaced successfully",
                data: note
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || "Internal server error",
                data: null
            });
        }
    }
};
