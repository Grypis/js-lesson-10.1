//! ======================================
/* console.log(1);
console.log(2);
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(3);
console.log(4); */

//! ======================================
console.log("Hello world");

function callback() {
  console.log("TEST");
}

setTimeout(() => {
  console.log("Hello 1");
}, 1000);
setTimeout(() => {
  console.log("Hello 2");
}, 2000);
setTimeout(() => {
  console.log("Hello 3");
}, 3000);
