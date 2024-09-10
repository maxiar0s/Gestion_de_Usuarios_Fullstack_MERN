const express = require('express')
const cors = require('cors')
const app = express();

//config

app.set('port', process.env.PORT || 4000)
module.exports = app;