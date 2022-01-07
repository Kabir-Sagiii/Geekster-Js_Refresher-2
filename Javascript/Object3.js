var obj = {
  model: "oneplus9 pro",
  brand: "oneplus",
  reviews: ["Excellent", "Impressive", "Good", "Excellent"],
  users: [
    {
      name: "s1",

      phone: 999,
      address: {
        city: "c1", // obj.users[1].address.state
        state: "s1",
      },
    },
    {
      name: "s2",

      phone: 999, //obj.users[1].address.city[0].c1[0].c2
      address: {
        city: [
          {
            c1: [
              {
                c2: "Hyd", // obj.users[1].address.city[0].c1[0].c2
              },
            ],
          },
        ],
        state: "s2",
      },
    },
    {
      name: "s3",

      phone: 999,
      address: {
        city: "c1",
        state: "s1",
      },
    },
  ],
};

console.log(obj.users[1].address.state);
console.log(obj.users[1].address.city[0].c1[0].c2);
