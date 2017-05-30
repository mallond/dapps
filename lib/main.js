/**
 * Created by dm on 5/28/17.
 */

'use strict';

var bitcore = require('bitcore-lib');
var Message = require('bitcore-message');


var getSignature = function(privateKey, data) {
  try {
    var _privateKey = bitcore.PrivateKey.fromWIF(privateKey);
    var signature = Message(data).sign(_privateKey);
    return signature;
  } catch (error) {
    alert(error);
  }
};

var verify = function(address, signature, data) {
  var verified = Message(data).verify(address, signature);
  return verified;
};

if (!window.i) {
  window.DAPPLog={};
}

window.DAPPLog.getSignature = getSignature;
window.DAPPLog.verify = verify;
