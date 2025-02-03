const name = "Naren";
const count = 3;

// console.log(`${name} has ${count} counts`);

const fullName = new String("Narendra Patil");
// console.log(fullName.length);
// console.log(fullName.toLowerCase());

const substring = fullName.substring(0, 5);
// console.log(substring);

const slice = fullName.substring(-8, 3);
// console.log(slice);

const trim = "    asd asd. asdasd.   asdasd.     asd.    ";
// console.log(trim);
// console.log(trim.trim());

const replace = "narendra%20patil";
console.log(replace.replace('%20', '-'));
console.log(replace.includes("narendra%p"));
console.log(replace.split("%20"));