# nodejs-require-hs
Module require hot swap reloader.


## Install

npm install require-hs --save


## Example (also see example/example.js

var rhs = require("require-hs");
var example = require("./foo.js");

rhs.RequireHS(__dirname+"/foo.js",function(ret,err) {
  if (!err) { example = ret; } else { console.log(err); }
});
