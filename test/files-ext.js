var test = require("tape");
var fe = require("..");

test("list all non-index js files", function (t) {
  var files = fe(__dirname + "/files").sort()
    , expected = [
        "one",
        "three",
        "two"
      ];

  t.deepEqual(files, expected);
  t.end();
});
