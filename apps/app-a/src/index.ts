import express from "express";
import { packageA } from "@pnpm-example/package-a";
const app = express();
app.get("/api", (req, res) => {
  res.send({ message: `Welcome to app-a!.` });
});
// any fix
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(packageA());
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
