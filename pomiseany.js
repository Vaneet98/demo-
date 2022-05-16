const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // console.log('Promise one is rejected but they not show error becasue we use promise any');
        reject('error');
    },200);
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Promise two is resolved');
       // resolve('vaneet kumar');
       reject("This is rejectd");
    },300);
});

const p= Promise.any([p1,p2]).then((result)=>{
    console.log(`My name is ${result}`);
}).catch((error)=>{
    console.log(`Error::${error}`);
});