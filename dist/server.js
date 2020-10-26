"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Create a new express app instance
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(1337, function () {
    console.log('App is now listening on port 1337!');
});
//# sourceMappingURL=server.js.map