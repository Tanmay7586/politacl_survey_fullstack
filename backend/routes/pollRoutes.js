// backend/routes/pollRoutes.js

const express = require("express");
const {
  createPoll,
  getPollById,
  castVote,
  getAllPolls, // Import the new controller
} = require("../controllers/pollController");

const router = express.Router();

router.post("/create", createPoll);
router.get("/:pollId", getPollById);
router.post("/:pollId/vote", castVote);
router.get("/", getAllPolls); // New route to get all polls

module.exports = router;
