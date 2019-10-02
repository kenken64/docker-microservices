// Working with Relational Tables
var mysqlx = require('@mysql/xdevapi');
var myTable;

// Connect to server using a connection URL
mysqlx
  .getSession({
    user: 'root',
    password: 'root1234',
    host: '172.17.0.3',
    port: 33060
  })
  .then(function (session) {
    // Accessing an existing table
    myTable = session.getSchema('testdb').getTable('tasks');

  })
  .then(function () {
    // Find a row in the SQL Table
    return myTable
        .select(['id', 'task', 'status', 'created_at'])
        .execute(function (row) {
          console.log(row);
        });
  })
  .then(function (myResult) {
    console.log(myResult);
    console.log(myTable.count().then(cnt=> {console.log(cnt)});
  });


console.log(myTable);
