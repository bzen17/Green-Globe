const app = require('./server/config/express');
const config = require('./server/config/config');
const http = require('http');


/**
 * Get port from environment and store in Express.
 */
const port = config.dev_server_port || config.port || '3000';


console.log('Server Port set to: ' + port);

app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


try {
  /**
   * Listen on provided port, on all network interfaces.
   */

  // setup when test automation to not restart port so it does not have any issues.
  if ((!module.parent) || (!config.test_automation)) {
    server.listen(port, () => console.log(`API running on localhost:${port}`));
  } else {
    console.log('Express Server not started (likely already running)');
  }
} catch (err) {
  console.log('Express Server failed to start ' + err&&err.message);
}

module.exports= server;
