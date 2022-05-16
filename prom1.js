const datas = [{ name: "Saurav", designation: "Backend Developer" },
{ name: "Kush", designation: "Backend Developer" }
];

getDatas = () => {
 setTimeout(() => {
   let output = "";
   datas.forEach((data, index) => {
     output += data.name + " ";
   })
   console.log(output);
 }, 1000)
}
createData = (newData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        datas.push(newData);
        let error = false;
        if (!error) {
          resolve();
        }
        else {
          reject("some error occurs");
        }
      }, 2000)
    })
   }
createData({ name: "Kunal", designation: "Backend Developer" })
      .then(getDatas)
      .catch(err => { console.log(err) });
   
   