var test = require("tape");
var fe = require("../lib");

test("list all files", function (t) {
  var files = fe("files").sort()
    , expected = [
        "README",
        "four.rb",
        "index.js",
        "one.js",
        "three.js",
        "two.js"
      ];

  t.deepEqual(files, expected);
  t.end();
});

test("list all .js files", function (t) {
  var files = fe("files", "js").sort()
    , expected = [
        "index.js",
        "one.js",
        "three.js",
        "two.js"
      ];

  t.deepEqual(files, expected);
  t.end();
});

test("list all .js files but exclude index file", function (t) {
  var files = fe("files", "js", true).sort()
    , expected = [
        "one.js",
        "three.js",
        "two.js"
      ];

  t.deepEqual(files, expected);
  t.end();
});
