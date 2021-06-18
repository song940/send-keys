const { exec } = require('child_process');
const { promisify } = require('util');

// osascript -e 'tell application "System Events" to keystroke "r" using {control down, shift down}'

const run = promisify(exec);
/**
 * send-keys
 * @param {*} key 
 * @param {*} param1 
 * @returns 
 */
const send = (key, { control, alt, shift } = {}) => {
  const k = [];
  if (alt) k.push('alt down');
  if (shift) k.push('shift down');
  if (control) k.push('control down');
  const state = k.join();
  return run(`osascript -e 'tell application "System Events" to keystroke "${key}" using { ${state} } '`)
    .then(({ stderr, stdout }) => {
      if (stderr) throw new Error(stderr);
      return stdout;
    });
};

module.exports = send;