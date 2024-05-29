// Filename: banUser.js (JavaScript)

// Import necessary libraries and modules
const Discord = require('discord.js');
const fs = require('fs');

// Function to ban a user from the server
const banUser = (message, userToBan) => {
    // Check if the user has the necessary permissions to ban users
    if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send('You do not have permission to ban users.');
    }

    // Get the user to ban from the message mentions
    const user = message.mentions.users.first();

    // Check if a user was mentioned
    if (!user) {
        return message.channel.send('Please mention the user you want to ban.');
    }

    // Get the member object of the user to ban
    const member = message.guild.member(user);

    // Check if the member is in the server
    if (member) {
        // Ban the user with a reason
        member.ban({ reason: 'Breaking server rules' })
            .then(() => {
                // Notify the user that they have been banned
                user.send(`You have been banned from ${message.guild.name} for breaking server rules.`)
                    .catch(err => console.log(`Failed to send ban message to ${user.tag}. Error: ${err}`));
                message.channel.send(`${user.tag} has been banned from the server.`);
            })
            .catch(err => {
                message.channel.send('Failed to ban the user.');
                console.log(`Failed to ban ${user.tag}. Error: ${err}`);
            });
    } else {
        message.channel.send('That user is not in the server.');
    }
};

// Export the banUser function for use in other files
module.exports = banUser;