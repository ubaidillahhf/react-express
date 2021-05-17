const express = require("express");
const app = express();
const port = 3000;

const loggingHitApi = (req, res, next) => {
  console.log(`${Date.now()} || IP : ${req.ip} Access URL ${req.originalUrl}`);
  next();
};
app.use(loggingHitApi);

// ? MENGGUNAKAN ROUTERS EXTERNAL
const routers = require("./routers");
app.use(routers);

// ? MENGGUNAKAN ROUTERS BASIC
// app.get("/", (req, res) => res.send("Hello world!"));
// app.post("/test-post", (req, res) => {
//   res.send("TEST METHOD POST");
// });
// app.put("/test-put", (req, res) => {
//   res.send("TEST METHOD PUT");
// });
// app.delete("/test-delete", (req, res) => {
//   res.send("TEST METHOD DELETE");
// });
// app.all("/test-all", (req, res) => {
//   res.send("TEST METHOD ALL");
// });

// /** Dynamic Routing */
// app.get("/article/:id", (req, res) => {
//   res.send(`ARTIKEL ID ${req.params.id}`);
// });

// /** Dynamic Routing With Query String */
// app.get("/article", (req, res) => {
//   res.write(`ARTIKEL PAGE NUMBER ${req.query.page}`);
//   res.write(`ARTIKEL PAGE SEARCH ${req.query.search}`);
//   res.end();
// });

// /** Routing With Regex */
// app.get("/page-*", (req, res) => {
//   res.send("route: " + req.path);
// });

// /** Routing With Optional */
// app.get("/pages?r", (req, res) => {
//   res.send("route: " + req.path);
// });

// /** Routing With Optional S non S */
// app.get("/page(s)?", (req, res) => {
//   res.send("route: " + req.path);
// });

// /** Routing With Minimal S 1 */
// app.get("/page(s)+", (req, res) => {
//   res.send("route: " + req.path);
// });

// /** Routing With Detail Id Optional */
// app.get("/detail/:id?", (req, res) => {
//   res.send(`ARTIKEL ID ${req.params.id ? req.params.id : null}`);
// });

app.listen(port, () => console.log(`Server running at port ${port}`));
