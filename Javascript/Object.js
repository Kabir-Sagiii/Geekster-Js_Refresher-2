var e;
var student = {
  name: "Geekster",
  city: "Delhi",
  phn: 9999999,
  add: undefined,
  e,
};
//access the property
console.log(student.city);
console.log(student);

// console.log(student["city"]);

//Insert New Property
student.email = "Geekster@gmail.com";
console.log(student);

//update New Property
student.city = "Gurugram";
console.log(student);

//delete new property
delete student.name1;
delete student.city;
delete student.phn;
student.name1;
console.log(student.name1);
console.log(student);
