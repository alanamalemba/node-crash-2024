import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Carol Davis" },
  { id: 4, name: "David Brown" },
  { id: 5, name: "Eve White" },
];

//logger
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

function jsonMiddleware(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
}

function getUsersHandler(req, res) {
  res.write(JSON.stringify(users));
  res.end();
}

function getUserByIdHandler(req, res) {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === Number(id));

  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found!" }));
  }
  res.end();
}

function notFoundHandler(req, res) {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found!" }));
  res.end();
}

function createUserHandler(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    console.log(users);

    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
}

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
