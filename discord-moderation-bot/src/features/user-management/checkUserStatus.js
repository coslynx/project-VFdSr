// Filename: checkUserStatus.js (JavaScript)

// Import necessary modules and libraries
const Discord = require('discord.js');
const fs = require('fs');

// Function to check user status based on their warning history
const checkUserStatus = (message, user) => {
    // Load the user's warning history from a JSON file
    const warningData = JSON.parse(fs.readFileSync('./warningData.json', 'utf8'));

    // Check if the user exists in the warning data
    if (warningData[user.id]) {
        const userWarnings = warningData[user.id];
        let totalWarnings = userWarnings.length;

        // Respond with the user's warning history
        message.channel.send(`User ${user.username} has a total of ${totalWarnings} warnings.`);
        message.channel.send(`Warning History:`);
        userWarnings.forEach((warning, index) => {
            message.channel.send(`Warning ${index + 1}: ${warning.reason}`);
        });
    } else {
        // Respond if the user has no warnings
        message.channel.send(`User ${user.username} has no warnings.`);
    }
};

// Export the function for external use
module.exports = checkUserStatus;