export const environment = {
  development: {
    database: {
      url: 'postgresql://local:none@localhost:5432/heroes',
    },
    api: {
      endpoint: 'http://localhost:3000/api/heroes',
      apiKey: '1qaz2wsx3edc',
    },
  },
  production: {
    database: {
      url: 'postgresql://local:none@localhost:5432/heroes',
    },
    api: {
      endpoint: 'http://localhost:3000/api/heroes',
      apiKey: '1qaz2wsx3edc',
    },
  },
};
