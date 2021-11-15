import { server } from './lib/server.js';

const app = {};

app.init = () => {
    // pasiruosti pradinius folder'ius
    // pasiruosti pradinius failus
    // prisijungti prie DB (duomenu bazes)
    // uzkurti/inicijuoti serveri
    server.init();

    // reguliariu procesu paleidimas
    setInterval(() => {
        // nebegaliojanciu token failu trinimas
    }, 24 * 60 * 60 * 1000);
};

app.init();

export default app;
