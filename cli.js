#!/usr/bin/env node

var electron = require('./')

var proc = require('child_process')

var child = proc.spawn('xvfb-run', [].concat(electron, process.argv.slice(2)), {stdio: 'inherit'})
child.on('close', function (code) {
  process.exit(code)
})

child.on('error', (err) => {
  console.log('Failed to start child process.', ['xvfb-run'].concat(electron, process.argv.slice(2)));
});
