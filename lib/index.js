var fs = require("fs");
var path = require("path");

module.exports = function(dir) {
  var files = fs.readdirSync(dir)
    , res = [];

  files.forEach(function (file) {
    if (file !== "index.js") {
      var ext = path.extname(file);

      if (ext === ".js") {
        var filename = path.basename(file, ext);
        res.push(filename);
      };
    };
  });

  return res;
};
