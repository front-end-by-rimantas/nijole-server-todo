import { Header } from '../components/header/Header.js';

function Page404() {
    const headerObj = new Header();

    return `<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>TODO</title>
            </head>

            <body>
                ${headerObj.render()}
                <h1>404 - puslapis nerastas</h1>
            </body>

            </html>`;
}

export { Page404 };
