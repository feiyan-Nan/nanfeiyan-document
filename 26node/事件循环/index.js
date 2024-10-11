console.log('start');

new Promise(resolve => {
  console.log('normal');
  resolve();
}).then(() => {
  setTimeout(() => {
    console.log('macro2');
  });
  console.log('micro');
}).then(() => {
  console.log('micro2');
});
setTimeout(() => {
  console.log('macro');
}, 400);
console.log('stop');