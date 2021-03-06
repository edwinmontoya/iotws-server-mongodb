var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'iotws-server-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/iotws-server-mongodb-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'iotws-server-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/iotws-server-mongodb-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'iotws-server-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/iotws-server-mongodb-production'
  }
};

module.exports = config[env];
