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