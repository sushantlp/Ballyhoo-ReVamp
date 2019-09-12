const next = require("next");
const http = require("http");
const url = require("url");
const path = require("path");
const express = require("express");

const port = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

  const server = express();
  server.get("/post/:slug", (req, res) => {
    return app.render(req, res, "/list", { slug: req.params.slug });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // use next routes
  server.use(`/static`, express.static("static"));
  server.use(handle);

  server.listen(4000, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:4000`);
  });

  // http
  //   .createServer((req, res) => {
  //     /* Parse request url to get its pathname */
  //     const parsedUrl = url.parse(req.url, true);
  //     const { pathname } = parsedUrl;

  //     /* If a service worker requested, serve it as a static file */
  //     if (pathname === "/service-worker.js") {
  //       const filePath = path.join(__dirname, ".next", pathname);
  //       app.serveStatic(req, res, filePath);

  //       /* Otherwise, let Next take care of it */
  //     } else {
  //       handle(req, res, parsedUrl);
  //     }
  //   })
  //   .listen(port, () => {
  //     console.log(`Listening on PORT ${port}`);
  //   });
});
