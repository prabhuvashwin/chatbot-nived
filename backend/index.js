// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { chat } = require('./services/openai');

const logger = require('./middleware/logger');

// Create an instance of express
const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(logger);

// Constants
const PORT = process.env.PORT || 5001;

// Route to handle OpenAI API request
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    if (!prompt) {
      return res.status(400).json({ success: false, message: 'Prompt is required' });
    } else {
      const response = await chat(prompt);

      return res.status(200).json({ success: true, message: response });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
