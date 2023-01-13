const http = require('http')

const server = http.createServer((req, res) => {
    // res.end("I will be able to be done with all of this requirement")
    const endpoint = req.url
    //landing page
    if (endpoint === '/'){
        res.end('we are in the home page');
    } else if(endpoint === '/About'){
        res.end('we are in the Puppies about page')
    }else if(endpoint === '/Contact'){
        res.end('we are in the Puppies Contact page')
    } else{
        res.end('Oops!... page not found')
    }
});
const port = 4455;
const hostname = '127.0.0.1';


server.listen(port ,hostname, () =>{
    console.log('Server is up and running');
});