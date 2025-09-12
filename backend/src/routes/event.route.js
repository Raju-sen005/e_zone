const express = require("express");
const { createEvent, getEvents, getEvent, updateEvent, deleteEvent } = require("../controllers/event.controller");

const router = express.Router();

// CREATE event
router.post("/", createEvent);

// READ all events
router.get("/", getEvents);

// READ single event
router.get("/:id", getEvent);

// UPDATE event
router.put("/:id", updateEvent);

// DELETE event
router.delete("/:id", deleteEvent);

module.exports = router;