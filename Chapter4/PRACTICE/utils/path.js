
/*
ENGLISH: Utility to get root directory path
HINGLISH: Root directory ka path pane ke liye utility

ENGLISH: This helps in maintaining consistent file paths across the application
HINGLISH: Is se pure application mein file paths consistent rehte hain
*/
const path = require('path');
module.exports = path.dirname(require.main.filename);
