import http from 'http';
import { config } from '../config.js';
import fs from './fs.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encrypted ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const parsedPathName = parsedURL.pathname;
    const httpMethod = req.method.toLowerCase();
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');

    //  -> home psl
    // about -> about psl

    // css/main.css -> css faila
    // css/button.css -> css faila

    // js/main.js -> js faila
    // js/button.js -> js faila

    req.on('data', () => {
        console.log('uzklausa in progress...');
    });

    req.on('end', async () => {
        let pageTemplate = trimmedPath;
        if (pageTemplate === '') {
            pageTemplate = 'home';
        }
        const htmlContent = await fs.readHTMLFile(pageTemplate);

        if (htmlContent === '') {
            const html404 = await fs.readHTMLFile('404');
            return res.end(html404);
        }
        return res.end(htmlContent);
    });
});

// server.routes = {
//     '': 'home',
//     'about': 'about',
//     '404': '404',
// }

server.init = () => {
    server.httpServer.listen(config.httpPort, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${config.httpPort}`);
    });
};

export { server };

/*

/                               - home
/404                            - 404

/about                          - about

/naujienos                      - posts-list
/naujienos/xyz-vestuves         - naujiena
/naujienos/kepe-blynus          - naujiena
/naujienos/naujas-prezidentas   - naujiena
/paslaugos                      - services-list
/paslaugos/nuoma                - paslauga
/paslaugos/remontas             - paslauga
/paslaugos/konsultacija         - paslauga

*/
