
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

const PORT = 5000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
