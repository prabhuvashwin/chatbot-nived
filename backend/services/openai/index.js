const OpenAI = require('openai');
const sendPrompt = require('./chat');
const { LANGUAGE } = require('../../helpers/constants');
const {
  translateToFrench,
  translateToEnglish,
  translateToSpanish,
  translateToKorean,
  translateToJapanese,
  translateToChinese
} = require('./translations');
const summarizeImage = require('./image-summarize');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Ensure you have your API key in an .env file

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const chat = async (prompt) => {
  const response = await sendPrompt(openai, prompt);

  return response;
};

const translate = async (text, lang) => {
  let translated_text = text;
  switch (lang) {
    case LANGUAGE.ENGLISH:
      translated_text = await translateToEnglish(openai, text);
      break;

    case LANGUAGE.SPANISH:
      translated_text = await translateToSpanish(openai, text);
      break;

    case LANGUAGE.KOREAN:
      translated_text = await translateToKorean(openai, text);
      break;

    case LANGUAGE.JAPANESE:
      translated_text = await translateToJapanese(openai, text);
      break;

    case LANGUAGE.CHINESE:
      translated_text = await translateToChinese(openai, text);
      break;
  
    case LANGUAGE.FRENCH:
    default:
      translated_text = await translateToFrench(openai, text);
      break;
  }

  return translated_text;
};

const summarize = async (filePath) => {
  const summary_message = await summarizeImage(openai, filePath);

  return summary_message;
};

module.exports = {
  chat,
  translate,
  summarize
};