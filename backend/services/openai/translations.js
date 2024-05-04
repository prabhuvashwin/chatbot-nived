const translateToFrench = async (openai, text) => {
  const prompt = `Translate the following text to French: "${text}". Only return the translation.`;

  const params = {
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  };

  const query = await openai.chat.completions.create(params);

  return query.choices[0].message.content;
};

const translateToEnglish = async (openai, text) => {
  const prompt = `Translate the following text to English: "${text}". Only return the translation.`;

  const params = {
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  };

  const query = await openai.chat.completions.create(params);

  return query.choices[0].message.content;
};

const translateToSpanish = async (openai, text) => {
  const prompt = `Translate the following text to Spanish: "${text}". Only return the translation.`;

  const params = {
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  };

  const query = await openai.chat.completions.create(params);

  return query.choices[0].message.content;
};

const translateToKorean = async (openai, text) => {
  const prompt = `Translate the following text to Korean: "${text}". Only return the translation.`;

  const params = {
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  };

  const query = await openai.chat.completions.create(params);

  return query.choices[0].message.content;
};

const translateToJapanese = async (openai, text) => {
  const prompt = `Translate the following text to Japanese: "${text}". Only return the translation.`;

  const params = {
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  };

  const query = await openai.chat.completions.create(params);

  return query.choices[0].message.content;
};

const translateToChinese = async (openai, text) => {
  const prompt = `Translate the following text to Chinese: "${text}". Only return the translation.`;

  const params = {
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  };

  const query = await openai.chat.completions.create(params);

  return query.choices[0].message.content;
};

module.exports = {
  translateToFrench,
  translateToEnglish,
  translateToSpanish,
  translateToKorean,
  translateToJapanese,
  translateToChinese
};
