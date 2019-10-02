'use strict';

const mysqlx = require('@mysql/xdevapi');

const options = {
  host: '172.17.0.3',
  port: 33060,
  password: 'root1234',
  user: 'root',
  schema: 'testdb'
};

mysqlx.getSession(options)
  .then(session => {
    console.log(session.inspect());
    session.close();
  }).catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
