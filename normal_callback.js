/* const funA=()=> console.log("Welcome fun A");
const funB=()=> console.log("Welcome fun B");
funA();
funB(); */

const funA=(callback)=> { //pass any name in paramter like abc, xyz
   setTimeout(()=>{
    console.log("Welcome fun A");
    callback();
   },3000)
  
}
const funB=()=> console.log("Welcome fun B");
funA(funB);
//funB();