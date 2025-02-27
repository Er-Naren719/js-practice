// const partUser = new Object();

const partUser = {};
partUser.id = "123abc";
partUser.name = "Sam";
partUser.isLoggedIn = true;
// console.log(partUser);

const regularUser = {
    email: "fake@dummy.com",
    fullName: {
        userFullName: {
            firstName: "Naren",
            lastName: "Patil"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
    {
        id: 1,
        name: "a"
    },
    {
        id: 2,
        name: "b"
    },
    {
        id: 3,
        name: "c"
    },
]
// console.log(users[1].name);
// console.log(Object.keys(partUser));
// console.log(Object.values(partUser));
// console.log(Object.entries(partUser));

// console.log(partUser.hasOwnProperty("name"));


const course = {
    name: "JS practice",
    cost: 999,
    courseInstructor: "Naren"
}
const { courseInstructor: instructor } = course;
console.log(instructor)