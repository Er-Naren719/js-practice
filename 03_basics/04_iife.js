// Named IIFE
(function ride() {
    console.log("DB Connected");
})();

((name) => {
    console.log(`DB ${name} Connected`);
})("Sky");