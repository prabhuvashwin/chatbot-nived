const OpenAI = require('openai');
const sendPrompt = require('../chat');

// Mock OpenAI instance
const openai = new OpenAI({
  apiKey: 'MOCK_API_KEY',
});

describe('sendPrompt', () => {
  it('should send a prompt to OpenAI chat API and return the response', async () => {
    // Mock OpenAI chat completions.create method
    openai.chat.completions.create = jest.fn().mockResolvedValue({
      choices: [{ message: { content: 'Response from OpenAI' } }],
    });

    const prompt = 'Hello, OpenAI!';
    const expectedResponse = 'Response from OpenAI';

    const response = await sendPrompt(openai, prompt);

    expect(openai.chat.completions.create).toHaveBeenCalledWith({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    expect(response).toBe(expectedResponse);
  });
});