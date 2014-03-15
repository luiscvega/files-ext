var fs = require("fs");

module.exports = function(path, fileExt, excludeIndexFile) {
  var files = fs.readdirSync(path);

  if (fileExt) {
    var new_files = [];

    for (var i = 0; i < files.length; i++) {
      var file = files[i]
        , ext = require("path").extname(file);

      if (excludeIndexFile && file === "index.js") continue;

      if (ext === "." + fileExt) {
        new_files.push(files[i]);
      };
    };

    return new_files;
  }
  else {
    return files;
  }
};
