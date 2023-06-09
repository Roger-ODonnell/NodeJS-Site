const http = require("http");
const fs = require("fs");
const express = require("express");

const hostname = "127.0.0.1";
const port = "8000";

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

server.listen(port, hostname, () => {
    console.log(`Listening on port ${port} at address ${hostname}`);
});