prom=(a,b)=> {
    return new Promise((resolve, reject)=>{
        var c=a/b;
        setTimeout(()=>{
            if(a,b)
            {
                resolve("Your answer:: "+c);
            }
            else{
                reject('Failed to calculate');
            }
        },2000)
    });
}
prom(2,0).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
});