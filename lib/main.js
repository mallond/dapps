/**
 * Created by dm on 5/28/17.
 */

'use strict';

const bitcore = require('bitcore-lib');
const Message = require('bitcore-message');

console.log('Babel');

const privateKey = bitcore.PrivateKey.fromWIF('L3yk3ZLnGvqaEeYyJRkzL3T9NPRqATNpe34KPtLTQLX1RdeunYiM');
const data = 'tada';
const signature = Message(data).sign(privateKey);
const address = '135eGSTRjQcK6K9Gyqa2MsHpvnxgtdLMqG';
var verified = Message(data).verify(address, signature);

console.log(verified);

const value = new Buffer('correct horse battery staple');
const hash = bitcore.crypto.Hash.sha256(value);
const bn = bitcore.crypto.BN.fromBuffer(hash);

const address2 = new bitcore.PrivateKey(bn).toAddress();

console.log('Private Key:', bn.toString());
console.log('Public Address:', address2.toString());