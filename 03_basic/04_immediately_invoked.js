//Immediately invoked function Expression (IIFE)
(function chai() {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`db connected ${name}`);
})('upendra');