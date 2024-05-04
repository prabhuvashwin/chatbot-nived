/**
 * Sends a prompt to OpenAI chat API and returns the response.
 * @param {object} openai - The OpenAI instance.
 * @param {string} prompt - The prompt message to send.
 * @returns {Promise<string>} The response from OpenAI chat API.
 */
const sendPrompt = async (openai, prompt) => {
  const params = {
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  };

  const chatCompletion = await openai.chat.completions.create(params);

  return chatCompletion.choices[0].message.content;
};

module.exports = sendPrompt;
