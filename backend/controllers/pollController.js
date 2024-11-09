// backend/controllers/pollController.js

const Poll = require("../models/Poll");

// Create a new poll
exports.createPoll = async (req, res) => {
  try {
    const { title, options } = req.body;
    if (!title || title.trim() === "") {
      return res.status(400).json({ error: "Poll title is required" });
    }

    const poll = new Poll({ title, options });
    const createdPoll = await poll.save();
    res.json(createdPoll);
  } catch (error) {
    console.error("Error creating poll:", error);
    res.status(500).json({ error: "Failed to create poll" });
  }
};

// Get a poll by its ID
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

// Cast a vote in a poll
exports.castVote = async (req, res) => {
  try {
    const pollId = req.params.pollId;
    const { selectedOption, name, comment } = req.body;

    const poll = await Poll.findById(pollId);
    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    const option = poll.options.find((opt) => opt.text === selectedOption);
    if (option) {
      option.votes += 1;

      if (name || comment) {
        poll.votes = poll.votes || [];
        poll.votes.push({ name, comment, selectedOption });
      }

      await poll.save();
      res.json({ message: "Vote submitted successfully" });
    } else {
      res.status(400).json({ error: "Selected option not found" });
    }
  } catch (error) {
    console.error("Error casting vote:", error);
    res.status(500).json({ error: "Failed to cast vote" });
  }
};

// Retrieve all polls
exports.getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json(polls);
  } catch (error) {
    console.error("Error fetching polls:", error);
    res.status(500).json({ error: "Failed to fetch polls" });
  }
};
