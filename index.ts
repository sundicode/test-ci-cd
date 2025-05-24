import { createServer } from "./server";

const server = createServer();
const port = 3000;

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
