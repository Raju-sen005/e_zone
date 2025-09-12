const Event = require("../models/event.model");

// ➕ Create Event
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: "Failed to create event", details: err.message });
  }
};

// 📥 Get All Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
      events,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events", details: err.message });
  }
};

// 📥 Get Single Event
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.status(200).json({
      success: true,
      message: "Event fetched successfully",
      event,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch event", details: err.message });
  }
};

// ✏️ Update Event
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    await event.update(req.body);

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update event", details: err.message });
  }
};

// ❌ Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    await event.destroy();

    res.status(200).json({ success: true, message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete event", details: err.message });
  }
};
