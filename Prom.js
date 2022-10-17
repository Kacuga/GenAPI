const http = require('http');
const fs = require('fs');
const path =  require('path');
const PORT = 9000;




const server = http.createServer((req, res) => {
    console.log('Server request');


    res.setHeader('Content-Type', 'text/html');

    const createPath = (page) => path.resolve(__dirname, 'views' , `${page}.html`);

    let basePath = '';

    switch (req.url) {
        case '/':
            basePath = createPath('index');
            res.statusCode = 200;
            break;
        case '/contacts':
            basePath = createPath('contact');
            res.statusCode = 200;
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;

    }


    fs.readFile(basePath, (err,data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log('Server status: UP', 'Port :9000');
    console.log('Realese : 0.0.2a');
    console.log('Bild : SVR.00001.02a')
    console.log('Prom')
})

