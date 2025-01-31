const http = require("http");
const static = require("node-static");
const querystring = require("node:querystring");
const port = process.env.PORT || 5001;
// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const file = new static.Server("./");
const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url === "/form") {
    file.serveFile("/form.html", 200, {}, req, res);
  } else if (req.method == "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const userdata = querystring.parse(body);
      const { username, email } = userdata;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<p>Username: ${username}</p>`);
      res.write(`<p>Emal: ${email}</p>`);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404: Page not found</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
