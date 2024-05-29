// Filename: warnUser.js (JavaScript)

// Import necessary libraries and modules
const Discord = require('discord.js');
const { getUserWarningHistory } = require('./checkUserStatus.js');
const { logWarning } = require('../logging-reporting/moderationLogs.js');

// Function to warn a user with a specified reason
const warnUser = (message, user, reason) => {
    // Check if the user has any previous warnings
    const warningHistory = getUserWarningHistory(user);

    // Log the warning for transparency and record-keeping
    logWarning(user, message.author, reason);

    // Send a warning message to the user
    user.send(`You have been warned for: ${reason}`);

    // Send a confirmation message to the moderator
    message.channel.send(`User ${user.tag} has been warned for: ${reason}`);
};

// Export the warnUser function for external use
module.exports = {
    warnUser,
};