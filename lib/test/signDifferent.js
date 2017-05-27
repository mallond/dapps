var bitcore = require('bitcore-lib');
var Message = require('bitcore-message');

// Any Bit coin Private Key
// https://www.bitaddress.org/

var privateKey = bitcore.PrivateKey.fromWIF('L3yk3ZLnGvqaEeYyJRkzL3T9NPRqATNpe34KPtLTQLX1RdeunYiM');

var fs = require("fs");

fs.readFile("./bitcoin.pdf", function (err, data) {
  if (err) throw err;

  // Sign the Message
  var signature = Message(data.toString()).sign(privateKey);

  console.log(signature);

  // Public Key
  var address = '135eGSTRjQcK6K9Gyqa2MsHpvnxgtdLMqG';

  // Read File Again
  fs.readFile("./bitcoin_modified.pdf", function (err, data) {
    "use strict";
    //var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
    var verified = Message(data.toString()).verify(address, signature);

    console.log(verified);
  });


});
