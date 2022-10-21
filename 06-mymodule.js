const fs = require("fs");
const path = require("path");

function getFiles(dirName, extFilter, callback) {
  extFilter = "." + extFilter;
  fs.readdir(dirName, "utf-8", function (err, data) {
    if (err) {
      return callback(err);
    } else {
      list = [];
      data.forEach((element) => {
        // console.log(extFilter)
        if (path.extname(element) === extFilter) {
          list.push(element);
        }
      });
    }
    return callback(err, list);
  });
}

module.exports = getFiles;

// Aquí va todo el trabajo de procesamiento
// función con tres parámetros: directorio, extención, callback.
// No alterar filename extension
// 1. Export a single function that takes exactly the arguments described.
// 2. Call the callback exactly once with an error or some data as described.
// 3. Don't change anything else, like global variables or stdout.
// 4. Handle all the errors that may occur and pass them to the callback.
