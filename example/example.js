var rhs = require("require-hs");
var example = require("./foo.js");

rhs.RequireHS(__dirname+"/foo.js",function(ret,err) {
  if (!err) { example = ret; } else { console.log(err); }
});
