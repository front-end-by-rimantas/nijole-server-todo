import http from 'http';
import { config } from '../config.js';
import fs from './fs.js';

import { PageHome } from '../pages/Home.js';
import { Page404 } from '../pages/404.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encrypted ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const parsedPathName = parsedURL.pathname;
    const httpMethod = req.method.toLowerCase();
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');

    req.on('data', () => {
        console.log('uzklausa in progress...');
    });

    req.on('end', async () => {
        const textFileExtensions = ['css', 'js', 'svg', 'webmanifest'];
        const binaryFileExtensions = ['woff2', 'woff', 'ttf', 'eot', 'otf', 'png', 'jpg', 'ico'];
        const urlParts = trimmedPath.split('.');
        const fileExtension = urlParts[urlParts.length - 1];
        const isTestFile = trimmedPath.includes('.test.');
        const isTextFile = textFileExtensions.includes(fileExtension);
        const isBinaryFile = binaryFileExtensions.includes(fileExtension);
        const isAPI = trimmedPath.indexOf('api') === 0;
        const isPage = !isTestFile && !isTextFile && !isBinaryFile && !isAPI;

        const MIMES = {
            html: 'text/html',
            css: 'text/css',
            js: 'text/javascript',
            svg: 'image/svg+xml',
            woff2: 'font/woff2',
            woff: 'font/woff',
            ttf: 'font/ttf',
            eot: 'application/vnd.ms-fontobject',
            otf: 'font/otf',
            png: 'image/png',
            jpg: 'image/jpeg',
            ico: 'image/x-icon',
            webmanifest: 'application/manifest+json',
        };

        if (isTextFile) {
            const fileContent = await fs.readStaticTextFile(trimmedPath);
            res.writeHead(200, {
                'Content-Type': MIMES[fileExtension],
            });
            return res.end(fileContent);
        }
        if (isBinaryFile) {
            const fileContent = await fs.readStaticBinaryFile(trimmedPath);
            res.writeHead(200, {
                'Content-Type': MIMES[fileExtension],
            });
            return res.end(fileContent);
        }
        if (isPage) {
            let pageHandler = server.routes[trimmedPath];
            if (!pageHandler) {
                pageHandler = server.routes['404'];
            }

            const htmlContent = pageHandler();

            res.writeHead(200, {
                'Content-Type': MIMES.html,
            });
            return res.end(htmlContent);
        }

        res.writeHead(404);
        return res.end('Nerastas norimas tipas/turinys');
    });
});

server.routes = {
    '': PageHome,
    404: Page404,
};

server.init = () => {
    server.httpServer.listen(config.httpPort, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${config.httpPort}`);
    });
};

export { server };
