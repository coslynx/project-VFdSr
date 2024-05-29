// muteUser.js (JavaScript)

// Import necessary libraries and packages
const Discord = require('discord.js');

// Define the muteUser function to handle muting users
const muteUser = (message, targetUser, muteDuration) => {
    // Check if the message author has permission to mute users
    if (!message.member.hasPermission('MANAGE_ROLES')) {
        message.channel.send('You do not have permission to mute users.');
        return;
    }

    // Get the mute role from the server
    const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

    // If the mute role does not exist, create it
    if (!muteRole) {
        try {
            muteRole = await message.guild.roles.create({
                data: {
                    name: 'Muted',
                    color: '#000000',
                    permissions: []
                }
            });
    
            // Loop through all members in the server and add the mute role
            message.guild.members.cache.forEach(async member => {
                await member.roles.add(muteRole);
            });
        } catch (error) {
            console.log(error);
            message.channel.send('An error occurred while creating the mute role.');
            return;
        }
    }

    // Add the mute role to the target user
    targetUser.roles.add(muteRole);

    // Set a timeout to remove the mute role after the specified duration
    setTimeout(() => {
        targetUser.roles.remove(muteRole);
        message.channel.send(`${targetUser} has been unmuted.`);
    }, muteDuration);
};

module.exports = muteUser;