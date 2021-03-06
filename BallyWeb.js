const next = require("next");

const Path = require("path");
const express = require("express");
const dev = process.env.NODE_ENV !== "production";
//const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/robots.txt", (req, res) => {
      app.serveStatic(req, res, Path.resolve("./static/robots.txt"));
    });

    server.get("/sitemap.xml", (req, res) => {
      app.serveStatic(req, res, Path.resolve("./static/sitemap.xml"));
    });

    server.get("/favicon.ico", (req, res) => {
      app.serveStatic(req, res, Path.resolve("./static/favicon.ico"));
    });

    server.get("/service-worker.js", (req, res) => {
      // Don't cache service worker is a best practice (otherwise clients wont get emergency bug fix)
      res.set(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
      );
      res.set("Content-Type", "application/javascript");
      if (dev) {
        app.serveStatic(req, res, Path.resolve("./static/service-worker.js"));
      } else {
        app.serveStatic(req, res, Path.resolve("./.next/service-worker.js"));
      }
    });

    server.get("/about", (req, res) => {
      return app.render(req, res, "/about", {});
    });

    server.get("/term", (req, res) => {
      return app.render(req, res, "/term", {});
    });

    server.get("/privacy", (req, res) => {
      return app.render(req, res, "/privacy", {});
    });

    server.get("/faq", (req, res) => {
      return app.render(req, res, "/faq", {});
    });

    server.get("/explore", (req, res) => {
      return app.render(req, res, "/explore", {});
    });

    server.get("/profile", (req, res) => {
      return app.render(req, res, "/profile", {});
    });

    server.get("/enquiry", (req, res) => {
      return app.render(req, res, "/enquiry", {});
    });

    server.get("/explore", (req, res) => {
      return app.render(req, res, "/explore", {});
    });

    server.get("/order", (req, res) => {
      return app.render(req, res, "/order", {});
    });

    server.get("/checkout", (req, res) => {
      return app.render(req, res, "/checkout", {});
    });

    server.get("/:city", (req, res) => {
      return app.render(req, res, "/", { city: req.params.city });
    });

    server.get("/:city/:city_id", (req, res) => {
      return app.render(req, res, "/", {
        city: req.params.city,
        city_id: req.params.city_id
      });
    });

    server.get("/:city/:title/:secret", (req, res) => {
      // const queryParams = Object.assign({}, req.params, req.query);
      // return app.render(req, res, "/list",queryParams);

      return app.render(req, res, "/list", {
        city: req.params.city,
        title: req.param.title,
        secret: req.param.secret
      });
    });

    server.get("/:city/:partner/:title/:secret", (req, res) => {
      return app.render(req, res, "/detail", {
        city: req.params.city,
        partner: req.params.partner,
        title: req.param.title,
        secret: req.param.secret
      });
    });

    server.get("*", (req, res) => {
      return app.render(req, res, "/");
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
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
