//! ======================================
/* console.log(1);
console.log(2);
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(3);
console.log(4); */

//! ======================================
/* console.log("Hello world");

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
}, 3000); */

//! ======================================
/* for (let i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
 */

/* for (let i = 4; i > 0; i--) {
  setTimeout(callback, i * 1000, i, 1, 2);
}

function callback(value, x, y) {
  console.log(value, x, y);
}
 */

//! ======================================
/* const id = setTimeout(() => {
  console.log("Hello world");
}, 7000);

setTimeout(() => {
  clearTimeout(id);
  console.log("Remove");
}, 2000); */

/* const timeoutId = setTimeout(() => {}, 0);
console.log(timeoutId);

clearTimeout(timeoutId); */
