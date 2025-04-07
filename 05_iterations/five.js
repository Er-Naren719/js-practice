// forEach

const coding = ["html", "css", "js", "ts", "next", "react", "angular"];
// coding.forEach(function (val) {
//     console.log(val);
// })

// function printName(item) {
//     console.log(item);
// }
// coding.forEach(printName);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// Array of objects
const myCoding = [
    {
        name: "javascript",
        fileName: "js"
    },
    {
        name: "typescript",
        fileName: "ts"
    },
    {
        name: "react",
        fileName: "jsx"
    }
]
myCoding.forEach((item) => {
    console.log(item.name, item.fileName);
})