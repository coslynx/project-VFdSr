// File: nsfwDetection.js (JavaScript)

// Import required libraries and dependencies
const Filter = require('filter');

// Initialize the word filter for NSFW content detection
const nsfwFilter = new Filter();

// Add NSFW keywords to the filter
nsfwFilter.addWords(['NSFW', 'explicit', '18+']);

// Function to detect NSFW content in messages
const detectNSFW = (message) => {
    // Check if the message contains any NSFW keywords
    if (nsfwFilter.isProfane(message)) {
        // Take appropriate action such as deleting the message or warning the user
        console.log('NSFW content detected. Taking action...');
    } else {
        console.log('Message is clean. No action needed.');
    }
};

// Export the detectNSFW function for external use
module.exports = { detectNSFW };