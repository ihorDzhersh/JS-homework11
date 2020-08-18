//**************************Task1********************************* */

// let http = require("http");
// let os = require("os");
// let path = require("path");


// http.createServer(function(request, response){
   
//     response.write('<h1>System information</h1> ');
//     response.write(`<h5>Current user name:  ${os.userInfo().username}</h5>` );
//     response.write(`<h5>OS type: ${os.platform()}</h5>`);
//     response.write(`<h5>System work time: ${Math.round(os.uptime()/60)} minutes </h5>`);
//     response.write(`<h5>Current work directory: ${path.basename(__dirname)} </h5>`);
//     response.write(`<h5>Server file name: ${path.basename(__filename)} </h5>`);
  
//     response.end();  
// }).listen(5000);

//**************************Task2********************************* */
// let http = require("http");
// let os = require("os");
// let dt = require('./personalmodule');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(`<h4>Date of request: ${dt.myDateTime()}</h4>`)
//     res.write(`<h4> ${dt.greating()}, ${os.userInfo().username} </h4>`)
//     res.end(``);
//   }).listen(8000); 