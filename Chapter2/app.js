
const http = require('http');
const serverHandler = require('./selftry.js');

const server = http.createServer(serverHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
