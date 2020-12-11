const obj = {
  name: 'nanfeiyan',
  age: 23,
};

console.log(JSON.stringify(obj, null, 2));
console.log(JSON.parse(JSON.stringify(obj, null, 2)));
