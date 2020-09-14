"use strict";

const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();

app.use(compression({ level: 9, memLevel: 9 }));

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (request, response) => {
  const filePath = getFilePath(request.url);
  return response.sendFile(path.join(__dirname, "build", filePath));
});

const getFilePath = requestUrl => {
  const { dir, ext, base } = path.parse(requestUrl);
  if (!ext) {
    return "index.html";
  }
  return getFilePathFromRoot(dir, base);
};

const getFilePathFromRoot = (dir, base) => {
  const pathSegments = dir
    .split("/")
    .filter(Boolean)
    .slice(1);
  return path.join(...pathSegments, base);
};

const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`App listening at port ${port}`));
