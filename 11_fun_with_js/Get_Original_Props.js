Array.prototype.customProp = "Naren";

const myArr = [1, 2, 3, 4, 5];

for (let value in myArr) {
  if (myArr.hasOwnProperty(value)) {
    // console.log(value); // This will print the index
    console.log(myArr[value]); // This will print the value
  }
}

myArr.map((val) => {
  console.log(val);
});