// File: wordFilter.js (JavaScript)

// Import necessary libraries and packages
const Filter = require('filter');

// Initialize word filter
const wordFilter = new Filter();

// Add prohibited words to the word filter
wordFilter.addWords(['badWord1', 'badWord2', 'badWord3']);

// Function to check message content for prohibited words
const checkMessageContent = (message) => {
    const content = message.content.toLowerCase();
    
    if (wordFilter.isProfane(content)) {
        // Delete the message or warn the user
        // Implement logic here to delete or warn the user
    }
};

module.exports = { checkMessageContent };