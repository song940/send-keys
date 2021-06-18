const send = require('..');

(async () => {
  await send('A');
  await send('a', { control: true });
  await send('b', { shift: true });
})();