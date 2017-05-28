/**
 * Created by dm on 5/28/17.
 */

'use strict';

const bitcore = require('bitcore-lib');
const Message = require('bitcore-message');


const privateKey = bitcore.PrivateKey.fromWIF('L3yk3ZLnGvqaEeYyJRkzL3T9NPRqATNpe34KPtLTQLX1RdeunYiM');
const data = 'tada';
const signature = Message(data).sign(privateKey);
const address = '135eGSTRjQcK6K9Gyqa2MsHpvnxgtdLMqG';
var verified = Message(data).verify(address, signature);

console.log(verified);

const getSignature = (privateKey, data)=>{
  const _privateKey = bitcore.PrivateKey.fromWIF(privateKey);
  const signature = Message(data).sign(_privateKey);
  return signature;
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
