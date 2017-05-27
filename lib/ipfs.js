/**
 * Created by dm on 5/27/17.
 */

'use strict';

// Create the IPFS node instance
const IPFS = require('ipfs');
const node = new IPFS();

node.on('ready', () => {
  // Your now is ready to use \o/

  console.log('READY');

  // stopping a node
  node.stop(() => {
    // node is now 'offline'
  });
});
