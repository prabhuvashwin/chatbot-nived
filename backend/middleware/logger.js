/**
 * Middleware function to log request details.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const logger = (req, res, next) => {
  // Log the request method and URL
  console.log('=================================================');
  console.log(`${req.method} ${req.url}`);

  // Optionally, log request headers or body
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('=================================================');

  // Call the next middleware in the chain
  next();
};

module.exports = logger;