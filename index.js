'use strict';

/**
  * While your app is running, this removes an already existing require module
  and reloads it so you can overwrite your already existing module data.
  * @param [object] (your module's stored identifier)
  * @param [string] (path and filename of your module)
  * @callback {object,string}
*/

exports.RequireHS = function(rfile,callback) {
  var ret, err;
  if (typeof require.cache[require.resolve(rfile)] !== "undefined") {
    delete require.cache[require.resolve(rfile)];
    ret = require(rfile);
  } else { err = __filename+" No module by that name ("+file+")"; }
  callback(ret,err);
};
