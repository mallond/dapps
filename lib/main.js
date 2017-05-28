/**
 * Created by dm on 5/28/17.
 */

'use strict';

const bitcore = require('bitcore-lib');
const Message = require('bitcore-message');


const getSignature = (privateKey, data)=> {
  try {
    const _privateKey = bitcore.PrivateKey.fromWIF(privateKey);
    const signature = Message(data).sign(_privateKey);
    return signature;
  } catch (error) {
    alert(error);
  }
};

const verify = (address, signature, data)=>{
  var verified = Message(data).verify(address, signature);
  return verified;
};

if (!window.i) {
  window.DAPPLog={};
}

window.DAPPLog.tada = ()=>{
  console.log('tada tada tada');
};

window.DAPPLog.getSignature = getSignature;
window.DAPPLog.verify = verify;
