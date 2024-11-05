// backend/routes/pollRoutes.js


const express = require("express");
const {
  createPoll,
  getPollById,
  castVote,
} = require("../controllers/pollController");
const router = express.Router();

router.post("/create", createPoll);
router.get("/:pollId", getPollById);
router.post("/:pollId/vote", castVote); // New route for handling votes

module.exports = router;