// This file is only used as entry for webpack. It exports RingcentralClient to global without 'default'
module.exports = require('..').default;
module.exports.default = module.exports;