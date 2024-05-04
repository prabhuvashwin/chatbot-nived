const OpenAI = require('openai');
const sendPrompt = require('./chat');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Ensure you have your API key in an .env file

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const chat = async (prompt) => {
  const response = await sendPrompt(openai, prompt);

  return response;
};

module.exports = {
  chat
};