/**
 * @file This file contains the backend server code for the chatbot application.
 * It imports necessary libraries, sets up middlewares, defines routes, and starts the server.
 */

// Import necessary libraries
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { chat, translate, summarize } = require('./services/openai');
const { LANGUAGE } = require('./helpers/constants');
const logger = require('./middleware/logger');

// Create an instance of express
const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(logger);

// Constants
const PORT = process.env.PORT || 5001;

/**
 * Handles the POST request to the '/chat' endpoint.
 * It sends the prompt to the OpenAI chat API and returns the response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
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
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/translate', async (req, res) => {
  const { text, lang } = req.body;

  try {
    if (!text) {
      return res.status(400).json({ success: false, message: 'Text is required' });
    } else {
      const translated_text = await translate(text, lang || LANGUAGE.FRENCH);

      return res.status(200).json({ success: true, message: translated_text });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/summarize', async (req, res) => {
  const { image_selection } = req.body;
  let filePath = '';
  switch (image_selection) {
    case 1:
      filePath = './assets/histogram_1.jpg';
      break;
    case 2:
      filePath = './assets/bar_chart_1.jpg';
      break;
    case 3:
      filePath = './assets/bar_chart_2.jpg';
      break;
    case 4:
      filePath = './assets/bar_chart_3.jpg';
      break;
    default:
      filePath = '';
      break;
  }
  try {
    if (!filePath) {
      return res.status(400).json({ success: false, message: 'File path is required' });
    } else {
      const response = await summarize(path.resolve(filePath));

      return res.status(200).json({ success: true, message: response });
    }
  }
  catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
