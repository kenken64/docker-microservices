const express = require("express"),
      mysql = require("mysql"),
      bodyParser = require("body-parser"),
      cors = require('cors');

app = express()
port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));


var pool = mysql.createPool({
    host: process.env.MYSQL_SERVER,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: process.env.MYSQL_CONNECTION
});


const findAllTasks = "SELECT id, task, status, created_at FROM tasks";

var makeQuery = function (sql, pool) {
    console.log(sql);
    return function (args) {
        const defer = new Promise(function(resolve, reject) {

		pool.getConnection(function (err, conn) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                conn.query(sql, args || [], function (err, results) {
                 conn.release();
                 if (err) {
                    console.log(err);
                    reject(err);
                    return;
                 }
                resolve(results);
             });
          });
	});
	return defer;
    }
};

var findAll = makeQuery(findAllTasks, pool);


app.get("/api/tasks", function (req, res) {
    findAll([])
        .then(function (results) {
            res.status(200).json(results);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).end();
        });
});

app.listen(port, ()=>{
	console.log(`Listening on port => ${port}`);
});
