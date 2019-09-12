const next = require("next");
// const http = require("http");
const url = require("url");
 const Path = require("path");
const express = require("express");

const port = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

  const server = express();

  // server.get("/favicon.ico", (req, res) => {
  //   const parsedUrl = url.parse(req.url, true)
  //   const static_folder = Path.join(__dirname, 'static', parsedUrl.pathname)
  //   app.serveStatic(req, res, static_folder)
  // });
  // server.get("/service-worker.js", (req, res) => {
  //   const parsedUrl = url.parse(req.url, true)
  //   const static_folder = Path.join(__dirname, 'static', parsedUrl.pathname)

  //   // Don't cache service worker is a best practice (otherwise clients wont get emergency bug fix)
  //   res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  //   res.set("Content-Type", "application/javascript");
  //   const path = Path.join(__dirname, 'static', static_folder)
  //   app.serveStatic(req, res, path)
  // });



  server.get("/favicon.ico", (req, res) => {
    if (dev) {
      app.serveStatic(req, res, Path.resolve("./static/favicon.ico"));
    } else {
      app.serveStatic(req, res, Path.resolve("./.next/favicon.ico"));
    }
  });
  server.get("/service-worker.js", (req, res) => {
    // Don't cache service worker is a best practice (otherwise clients wont get emergency bug fix)
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Content-Type", "application/javascript");
    if (dev) {
      app.serveStatic(req, res, Path.resolve("./static/service-worker.js"));
    } else {
      app.serveStatic(req, res, Path.resolve("./.next/service-worker.js"));
    }
  });


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
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});

