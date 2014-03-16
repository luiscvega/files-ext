var fs = require("fs");
var path = require("path");

module.exports = function(file_path, fileExt, excludeIndexFile) {
  var files = fs.readdirSync(file_path);

  if (fileExt) {
    var new_files = [];

    for (var i = 0; i < files.length; i++) {
      var file = files[i]
        , ext = path.extname(file);

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
