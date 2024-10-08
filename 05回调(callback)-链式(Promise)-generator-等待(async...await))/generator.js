let likeArray = { 0: 'zero', 1: 'one', length: 2, [Symbol.iterator]: Array.prototype[Symbol.iterator] };

const arr = Array.from(likeArray);
// const arr1 = [...likeArray];
console.log(arr);

let obj = {
  get [Symbol.toStringTag]() {
    return 'MyObject';
  }
};

console.log(Object.prototype.toString.call(obj));