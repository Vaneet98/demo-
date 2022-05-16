let promisecall=function(returnData,message){
    return function(resolve,reject){
        setTimeout(()=>{
            console.log(`The ${message} promise has resolved`);
            //resolve(returnData);
            reject('Not able to return the values');
        },returnData*100);
    }
};
let p1=new Promise(promisecall(10,'first'));
let p2=new Promise(promisecall(20,'second'));
let p3=new Promise(promisecall(30,'third'));
var total=0;
Promise.all([p1,p2,p3]).then((result)=>{
    for(var i in result)
    {
        total+=result[i];
    }
    console.log(`Result:: ${result}`);
    console.log(`Total::${total}`);
}).catch((error)=>{
    console.log(`Error::${error}`);
});