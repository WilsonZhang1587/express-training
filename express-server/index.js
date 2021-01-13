const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./member");
const fs = require('fs');

const app = express();

// Init middleware
app.use(logger);

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members
  })
);
// About page
app.get("/about", (req, res) =>
  fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(content)
  })
);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PROT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
