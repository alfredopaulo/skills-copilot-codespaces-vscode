// Create web server with node program


const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    const query = querystring.parse(url.parse(req.url).query);

    if (path === '/index.html') {
        fs.readFile(__dirname
            + '/index.html', 'utf-8', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.write('not found');
                    return res.end();
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
    } else if (path === '/submit') {
        fs.readFile(__dirname + '/index.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('not found');
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.write('<p>Your comment has been submitted</p>');
            res.write('<p>Comment: ' + query['comment'] + '</p>');
            return res.end();
        });
    }
}
);

