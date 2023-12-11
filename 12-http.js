const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Welcome to our ABOUT Page");
  } else {
    res.end(`
    <h1>Oops</h1>
    <p>The page you are looking is not available at the moment</p>
    <a href='/'>Back to Home Page </a>
  `);
  }
});

server.listen(3000);
