// const http = require ('http')
// const fs = require ('fs').promises 
// const { type } = require('os')

// const server = http.createServer(
//     (req,res) => {
//         res.writeHead(200,{ 'Content-Type': 'text/html' })

//         fs.readFileSync('./app.html', 'utf-8')

//         .then((data) => res.end(data))
//         .catch((err) => res.end(err))

//         const country="South Africa "
//         const name = "hlungwani"
//         let htmldata = fs.readFileSync ('./app.html','utf-8');
//         htmldata = htmldata.replace ("{{country}}",country);
//         htmldata = htmldata.replace ("{{name}}",name);

//         res.end(htmldata);

//     }
// );

// server.listen(3001)
// console.log("server is running")


const http = require("http");
const fs = require ('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

let htmldata = fs.readFileSync('./app.html', 'utf-8')

const name = "Nathan";
const country = "South Africa"

htmldata = htmldata.replace("{{name}}", name);
htmldata = htmldata.replace("{{country}}", country);

    res.end(htmldata);
});


server.listen(3002)
    console.log('server running');
