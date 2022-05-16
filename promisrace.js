const p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise one is fullfill and its time set is 4 second");
        resolve(1);
    },4000);
});
const p2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise two is fullfill and its time set is 2 second");
        resolve(1);
    },2000);
});

const p3= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise three is fullfill and its time set is 3 second");
        resolve(1);
    },3000);
});
 const p= Promise.race([p1,p2,p3]).then((value)=>{
     console.log('Returned Promise');
     console.log(value);
 })