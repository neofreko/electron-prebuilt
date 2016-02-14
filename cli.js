#!/usr/bin/env node

var electron = require('./')

var proc = require('child_process')
process.env.LD_LIBRARY_PATH = '/app/.apt/usr/lib/x86_64-linux-gnu:/app/.apt/usr/lib/i386-linux-gnu:/app/.apt/usr/lib'
var child = proc.spawn('xvfb-run', [].concat(electron, process.argv.slice(2)), {stdio: 'inherit'})
child.on('close', function (code) {
  process.exit(code)
})

child.stdio.on('data', function (data) {
  console.log(data)
})

child.stderr.on('data', function (data) {
  console.log(data)
})

child.on('error', (err) => {
  console.log('Failed to start child process.', ['xvfb-run'].concat(electron, process.argv.slice(2)));
});
