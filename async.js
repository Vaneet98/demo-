const probj = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
  }, 200);
});
const getbiodata = (indexdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexdata) => {
        let boidata = {
          name: "vaneet kumar",
          age: 24,
        };
        resolve(
          `my roll number is ${indexdata},my name is ${boidata.name}, and i am ${boidata.age} years old.`
        );
      },
      2000,
      indexdata
    );
  });
};

async function getData() {
  try {
    const rollnodata = await probj;
    console.log(rollnodata);
    const biodatas = await getbiodata(rollnodata[1]);
    console.log(biodatas);
  } catch (error) {
    console.log(`The error: ${error}`);
  }
}
console.log("this is down because i use git hub");
getData();
