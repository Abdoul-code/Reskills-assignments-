const http = require('http')

const server = http.createServer((req, res) => {
    const endpoint = req.url
    if (endpoint === '/'){
        res.end('we are in the Home page');
    } else if(endpoint === '/Allbooks'){
        res.end('We are in the page of All books')
     }
     else{
        res.end('Oops!... page not found')
    }
});

const port = 8989;
const hostname = '127.0.0.1';

server.listen(port ,hostname, () =>{
    console.log('My Book server is up and running');
});