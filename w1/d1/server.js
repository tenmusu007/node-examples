const http = require("http");

const server = http.createServer((request, response) => {
  console.log("A wild client appears!", request.url);

  if (request.url === "/users") {
    response.writeHead(200, { "Content-type": "applicaiton/json" });
    response.write(
      JSON.stringify({
        user: {
          id: 1,
          name: "atsuya",
          age : 23
      }})
		);
  } else if (request.url === "/products") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write(
			"<h1>cat!!!!!!</h1><img src='https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60'alt=''/>;"
		);
	}
  response.end();
});

server.listen(8000, () => console.log("Server is running at port 8000"));
