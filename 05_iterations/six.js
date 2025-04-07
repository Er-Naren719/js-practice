// const coding = ["html", "css", "js", "ts", "next", "react", "angular"];
// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newResult = myNums.filter((item) => item > 4)
// console.log(newResult);

const books = [
    {
        title: "Book 1",
        genre: "Fiction",
        publish: 1989,
        edition: 2012
    },
    {
        title: "Book 2",
        genre: "Non Fiction",
        publish: 1993,
        edition: 2016
    },
    {
        title: "Book 3",
        genre: "Science",
        publish: 2022,
        edition: 2025
    },
]

let userSelectedBook = books.filter((bk) => bk.genre === 'Science');
userSelectedBook = books.filter((bk) => {
    return bk.edition > 2015 && bk.genre === "Non Fiction"
});
console.log(userSelectedBook);