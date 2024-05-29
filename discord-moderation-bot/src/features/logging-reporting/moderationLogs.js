// moderationLogs.js (JavaScript)

// Import required libraries
const winston = require('winston');

// Configure Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/moderation.log' })
  ]
});

// Function to log moderation actions
const logModerationAction = (action, moderator, user, reason) => {
  logger.log({
    level: 'info',
    message: `${action} - Moderator: ${moderator}, User: ${user}, Reason: ${reason}`
  });
};

// Export the function for external use
module.exports = { logModerationAction };