// Break statement in for loop
for (let index = 1; index < 10; index++) {
    if (index == 5) {
        // console.log("5 detected");
        break;
    }
    // console.log(`value of i is ${index}`);
}

// Continue statement in for loop
for (let index = 1; index < 10; index++) {
    if (index == 5) {
        console.log("5 detected");
        continue;
    }
    console.log(`value of i is ${index}`);
}