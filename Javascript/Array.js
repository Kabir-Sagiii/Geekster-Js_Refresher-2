var info = [
  556,
  "Kabir",
  "Delhi",
  99999999,
  {
    pincode: 99999,
  },
  [3838, 32992, 29390, 32702],
];

var obj1 = {
  model: "iphone 13",
};

console.log(info[4].pincode);
console.log(info[5][0]);

var a = "Hello";
var name = 200;
var s;
console.log(typeof a);
console.log(typeof info);
console.log(typeof obj1);
console.log(s + a);
console.log(this.a + name);
console.log(s * name);

var data = [
  () => {
    console.log("hello");
  },
  "Geekster",
];
console.log(data[0]());
data[0]();
