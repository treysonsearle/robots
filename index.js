

require("dotenv").config();

const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    { PORT, SESSION_SECRET, DATABASE_URL } = process.env,
    app = express(),
    http = require('http'),
    { readRobots, createRobot } = require("./controllers/robot");
app.use(express.json());





massive({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
})
    .then(db => {
        app.set("db", db);
        console.log('im working')
    })
    .catch(err => console.log(err));

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
    })
)

app.post('/api/create', createRobot);
app.get('/api/robot', readRobots);

app.listen(PORT, _ => console.log(`running on ${PORT}`));
