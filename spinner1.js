// process.stout.write = writes the current spinner animation to the console then overwrites it with the next animation at the beginning
process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\  ')
}, 700);

setTimeout(() => {
  process.stdout.write('\r|  ')
}, 900);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\  ')
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|  ')
}, 1700);