
var cluster = require('cluster');

var numCPUs = require('os').cpus().length;

cluster.setupMaster({
    exec: __dirname + '/http.js',
    args: [],
    silent: false
});

for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
}

cluster.on('listening', function (worker, address) {
    console.log("workerId: " + worker.id + ', Address: ' + address.port);
});

cluster.on('exit', function (worker, code, signal) {
    if (worker.suicide === true) {
        console.log("Intenl̥tional exit");
    } else {
        cluster.fork();
    }

})