// backend/controllers/pollController.js

const Poll = require("../models/Poll");

exports.createPoll = async (req, res) => {
  try {
    // Check if title is provided in the request body
    const { title, options } = req.body;
    if (!title || title.trim() === "") {
      return res.status(400).json({ error: "Poll title is required" });
    }

    // Create the poll and save it
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

    // Find the poll
    const poll = await Poll.findById(pollId);
    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    // Find the selected option and increment its votes
    const option = poll.options.find((opt) => opt.text === selectedOption);
    if (option) {
      option.votes += 1;

      // If name or comment provided, store it in the votes array
      if (name || comment) {
        poll.votes = poll.votes || [];
        poll.votes.push({ name, comment, selectedOption });
      }

      // Save the poll with updated votes
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
