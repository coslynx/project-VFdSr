// File: kickUser.js (JavaScript)

// Import necessary modules and libraries
const Discord = require('discord.js');
const { logKickAction } = require('../../logging-reporting/moderationLogs');

// Define the kickUser function to kick a user from the server
const kickUser = async (message, userToKick) => {
    try {
        const member = message.guild.members.cache.get(userToKick);
        if (member) {
            await member.kick();
            // Log the kick action
            logKickAction(message.author, member.user);
            message.channel.send(`${member.user.tag} has been kicked from the server.`);
        } else {
            message.channel.send('User not found. Please provide a valid user ID.');
        }
    } catch (error) {
        console.error('Error kicking user:', error);
        message.channel.send('An error occurred while trying to kick the user. Please try again later.');
    }
};

// Export the kickUser function for external use
module.exports = { kickUser };