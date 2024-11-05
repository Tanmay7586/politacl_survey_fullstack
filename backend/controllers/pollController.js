// backend/controllers/pollController.js

const Poll = require("../models/Poll");

exports.createPoll = async (req, res) => {
  try {
    const poll = new Poll(req.body);
    const createdPoll = await poll.save();
    res.json(createdPoll);
  } catch (error) {
    console.error("Error creating poll:", error);
    res.status(500).json({ error: "Failed to create poll" });
  }
};

exports.getPollById = async (req, res) => {
  try {
    const pollId = req.params.pollId;
    const poll = await Poll.findById(pollId);
    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }
    res.json(poll);
  } catch (error) {
    console.error("Error retrieving poll:", error);
    res.status(500).json({ error: "Failed to retrieve poll" });
  }
};

exports.castVote = async (req, res) => {
  try {
    const pollId = req.params.pollId;
    const { selectedOption, name, comment } = req.body;

    // TO DO: Implement vote submission logic here
    res.json({ message: "Vote submitted successfully" });
  } catch (error) {
    console.error("Error casting vote:", error);
    res.status(500).json({ error: "Failed to cast vote" });
  }
};
