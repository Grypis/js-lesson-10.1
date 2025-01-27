setInterval(() => {
  //   console.log("SPAM");
}, 1000);

let counter = 0;
const intervalId = setInterval(() => {
  console.log(counter++);
}, 100);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);
