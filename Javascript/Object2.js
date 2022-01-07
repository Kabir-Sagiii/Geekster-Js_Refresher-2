var student = {
  name: "Geekster",
  email: "Geekster@gmail.com",
  address: {
    city: "Gurugram",
    state: "Haryana",
    pincode: 122001,
  },
};

// console.log(student);
// student.address.city = "Faridabad";
// console.log(student);
var student = {
  name: "Geekster",
  email: "Geekster@gmail.com",
  printDetails: function () {
    console.log("Delhi");
  },
  printAddress: function (city, state) {
    console.log(city, state);
  },
};

student.printDetails();
student.printAddress("Hyderabad", "TS");
