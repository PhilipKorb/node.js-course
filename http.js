const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our homepage");
  }

  if (request.url === "/about") {
    response.end("Here is our short history");
  }
});

server.listen(5000);
