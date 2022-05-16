const promise1 = new Promise((resolve, reject) => { setTimeout(resolve, 1000, 'vannet  kumar');});
const promise2 = new Promise((resolve, reject) => { setTimeout(reject, 100, 'ankush thakur');});
const promise3 = new Promise((resolve, reject) => {setTimeout(resolve, 100, 'Tanvi');});

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
