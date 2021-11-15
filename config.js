const environments = {};

environments.dev = {
    httpPort: 3000,
    envName: 'dev',
    hashingSecret: 'dummy-secret',
    defaultLang: 'en',
    languages: ['en', 'lt', 'ru'],
    db: {
        host: 'localhost',
        user: 'root',
        database: 'todo',
    },
};

environments.production = {
    httpPort: 5000,
    envName: 'production',
    hashingSecret: 'super-secret-salt-for-production-please-change-it-before-using-it-thanks',
    defaultLang: 'lt',
    languages: ['en', 'lt'],
    db: {
        host: 'localhost',
        user: 'root',
        database: 'todo-d2f54',
    },
};

const env = process.env.NODE_ENV;
const currentEnv = typeof env === 'string' ? env.toLowerCase() : '';
const exportableEnvName = typeof environments[currentEnv] === 'object' ? currentEnv : 'dev';
const config = environments[exportableEnvName];

export { config };
