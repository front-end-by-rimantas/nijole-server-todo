import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    req.on('data', () => {
        console.log('uzklausa in progress...');
    });

    req.on('end', () => {
        res.end('laba diena');
    });
});

server.init = () => {
    server.httpServer.listen(3000, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:3000`);
    });
};

export { server };
