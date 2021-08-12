const obj = {
  a: 1,
  b: 2,
  c: 3
};

const { a, b, c } = obj;

console.log(obj);
string = JSON.stringify(obj);
console.log(string);
console.log(JSON.parse(string));
x = new Object(obj);
console.log(x);