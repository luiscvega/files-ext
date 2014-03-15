var fs = require("fs");

module.exports = function(path, ext, excludeIndexFile) {
  var files = fs.readdirSync(path)
    , res = [];

  for (var i; i < files.length; i++) {
    files[i]
  };
};
