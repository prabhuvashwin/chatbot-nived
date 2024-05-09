const fs = require('fs');

const encodeImage = (filePath) => {
  // Read the image file synchronously
  const imageBuffer = fs.readFileSync(filePath);
  // Return a base64 encoded string
  return imageBuffer.toString('base64');
};

const summarizeImage = async (openai, filePath) => {
  console.log('=======> imagePath', filePath);
  // Getting the base64 string
  const base64Image = encodeImage(filePath);

  const params = {
    model: 'gpt-4-turbo',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Explore the image and summarize it'
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`
            }
          }
        ]
      }
    ],
    max_tokens: 300
  };

  const query = await openai.chat.completions.create(params);

  return query.choices[0].message.content;
};

module.exports = summarizeImage;