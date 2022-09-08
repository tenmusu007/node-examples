const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  let jsonBody = {};
  console.log("method", request.method);
  if (request.method !== "GET") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      jsonBody = { ...JSON.parse(body) };
    });
  }
  fs.readFile("users.json", (error, data) => {
    if (error) throw error;
    const jsonData = JSON.parse(data);
    const users = [...jsonData.users];
    if (request.url === "/getUsers") {
      response.writeHead(200, { "content-type": "application/json" });
      response.write(JSON.stringify({ users }));
      response.end();
    }
    if (request.url === "/createUser") {
      const newUser = { ...jsonBody, id: users.length + 1 };
      const updatedUsers = [...users, newUser];
      const newData = { users: updatedUsers };
      fs.writeFile("users.json", JSON.stringify(newData), (err) => {
        if (err) throw err;
        response.writeHead(201, { "content-type": "application/json" });
        response.write(JSON.stringify({ user: newUser }));
        response.end();
      });
    }
  });
});

server.listen(3001, () => console.log("Server running on port 3001"));
