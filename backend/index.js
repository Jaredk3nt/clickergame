'use strict';
const express = require('express'),
    sqlite = require('sqlite3'),
    serveStatic = require('serve-static');

var port = process.env.PORT || 3000;
var app = express();

var db = new sqlite.Database(':memory:');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS teams (id INTEGER PRIMARY KEY, name TEXT NOT NULL, score INTEGER NOT NULL, color TEXT NOT NULL)");
});

// app.use("/", serveStatic ( path.join (__dirname, '../frontend/dist') ) )

const routes = require('./routes/routes');
routes(app);

app.listen(port);
console.log('test RESTful API server started on: ' + port);