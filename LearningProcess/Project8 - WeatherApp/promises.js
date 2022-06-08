//A promise is a function that promises to do something and has 2 outcome functions: resolve and reject, for the case that the function succeeds and for the case that the function fails .
let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

//.then goes for the resolve
p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});
