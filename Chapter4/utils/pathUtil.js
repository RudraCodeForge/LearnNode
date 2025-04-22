
const path = require('path');

// Export the root directory path of the application
// Used for consistent file path resolution across the app
module.exports = path.dirname(require.main.filename);
