/**
 * Created by dm on 5/28/17.
 */
'use strict';

var repoPath = 'ipfs-' + Math.random();
// Create an IPFS node
var node = new Ipfs({
  init: false,
  start: false,
  repo: repoPath
});
// Init the node
node.init(handleInit);
function handleInit(err) {
  if (err) {
    throw err;
  }
  node.start(function () {
    console.log('Online status: ', node.isOnline() ? 'online' : 'offline');
    document.getElementById("status").innerHTML = 'IPFS status: ' + (node.isOnline() ? 'Online and running in the browser' : 'offline');
    // You can write more code here to use it. Use methods like
    // node.files.add, node.files.get. See the API docs here:
    // https://github.com/ipfs/interface-ipfs-core/tree/master/API

    setInterval(function() {
      node.swarm.addrs(function (err, addrs) {
        if (err) {
          throw err;
        }
        document.getElementById("count").innerHTML = 'Active Peers: '+addrs.length;


        console.log(addrs);
      });

    }, 3000);

  });
}



