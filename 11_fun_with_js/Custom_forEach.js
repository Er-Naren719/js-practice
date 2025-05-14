// Basic approach to create a custom forEach method
Array.prototype.getOriginalProps = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
}

// Advanced approach to create a custom forEach method
Array.prototype.customForEach = function (callback, thiscontext) {
  if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);
  const length = this.length;
  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty(i)) {
      callback.call(thiscontext, this[i], i, this)
    }
    i++;
  }
}
// Example usage
const arr = [1, true, null, "Naren", 5.234];
arr.customForEach((item, index, array) => {
  console.log(item);
  // console.log(index);
  // console.log(array);
});