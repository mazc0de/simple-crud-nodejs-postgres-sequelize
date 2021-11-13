// express setup
const express = require("express");
const app = express();
const port = 4000;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// public files
app.use(express.static("public"));

// method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// logger
const morgan = require("morgan");
app.use(morgan("tiny"));

// handlebars
const handlebars = require("express-handlebars");
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts/",
    defaultLayout: "main",
    partialsDir: __dirname + "/views/partials/",
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

//route
app.use(require("./routers/api.route"));
app.use(require("./routers/todo.route"));

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
