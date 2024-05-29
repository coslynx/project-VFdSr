// userReports.js (JavaScript)

// Import necessary modules and dependencies
const fs = require('fs');
const path = require('path');
const winston = require('winston');

// Define the file path for the user reports
const userReportsFilePath = path.join(__dirname, '../../../resources/userReports.json');

// Function to fetch all user reports
const getAllUserReports = () => {
    try {
        const userReportsData = fs.readFileSync(userReportsFilePath);
        return JSON.parse(userReportsData);
    } catch (error) {
        winston.error(`Error reading user reports data: ${error.message}`);
        return [];
    }
};

// Function to add a new user report
const addUserReport = (userId, report) => {
    try {
        const userReports = getAllUserReports();
        const newReport = {
            userId,
            report,
            timestamp: new Date().toISOString()
        };
        userReports.push(newReport);
        fs.writeFileSync(userReportsFilePath, JSON.stringify(userReports, null, 2));
        winston.info('New user report added successfully');
    } catch (error) {
        winston.error(`Error adding user report: ${error.message}`);
    }
};

// Function to get user reports by user ID
const getUserReportsByUserId = (userId) => {
    try {
        const userReports = getAllUserReports();
        return userReports.filter(report => report.userId === userId);
    } catch (error) {
        winston.error(`Error fetching user reports for user ID ${userId}: ${error.message}`);
        return [];
    }
};

// Export the functions for external use
module.exports = {
    getAllUserReports,
    addUserReport,
    getUserReportsByUserId
};