require('dotenv').config();

const express = require("express"),
      mysqlx = require('@mysql/xdevapi'),
      bodyParser = require("body-parser"),
      cors = require('cors');

app = express()
port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));

const mysqlDb = process.env.MYSQL_DATABASE;

const client = mysqlx.getClient(
  { user: process.env.MYSQL_USERNAME, host: process.env.MYSQL_SERVER, port: process.env.MYSQL_PORT,
	password: process.env.MYSQL_PASSWORD, schema: mysqlDb },
  { pooling: { enabled: true, maxIdleTime: Number(process.env.MYSQL_MAX_IDLE_TIME), maxSize: Number(process.env.MYSQL_CONNECTION), queueTimeout: Number(process.env.MYSQL_Q_TIMEOUT) } }
);

var tasksTable;

const session = client.getSession()
  .then(session => {
    console.log(session.inspect());
    tasksTable = session.getSchema(mysqlDb).getTable('tasks');
  }).catch(err => {
    console.error(err.stack);
    process.exit(1);
  });



app.get("/api/tasks", function (req, res) {
	let results = [];
	tasksTable
        .select(['id', 'task', 'status', 'created_at'])
        .execute((row)=> {
          	console.log(row);
		results.push(row);
        })
  	.then((myResult)=> {
    		console.log(myResult);
		res.status(200).json(results);
  	})
        .catch((err)=> {
            console.log(err);
            res.status(500).end();
        });
});

app.listen(port, ()=>{
	console.log(`Listening on port => ${port}`);
});
