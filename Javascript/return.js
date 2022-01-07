function fnReturn(n1, n2) {
  return n1 - n2;
}
var value = fnReturn(100, 200);
console.log(value);

var value1 = fnReturn(10, 20);
console.log(value1);

function fn() {
  return function (name) {
    console.log("Inner Function", name);
  };
}

fn()("Geekster");

var f = fn();
f("Kabir");
