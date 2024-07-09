//const mynumber = [7, 8, 9, 6, 4, 2, 4];

// const newNumber = mynumber.filter((num) => {
//     return num>3

// }

// )

// const changeOwner = [];

// mynumber.forEach((num) => {
//     if(num/2===   0)
//   changeOwner.push(num);
// });
// console.log(changeOwner);

const mybooking = [
  {
    passanger1: "Priya Sharma",
    trainNo: "12147",
    pnr: "AA56789012",
    Price: 2200,
    age: 40,
  },
  {
    passanger2: "Arjun Singh",
    trainNo: "22903",
    pnr: "BB12345678",
    Price: 300,
    age: 23,
  },
  {
    passanger3: "Saanvi Patel",
    trainNo: "12147",
    pnr: "AA56789012",
    Price: 2300,
    age: 24,
  },
  {
    passanger4: "Vikram Mehta",
    trainNo: "14117",
    pnr: "BB12345228",
    Price: 2500,
    age: 20,
  },
  {
    passanger5: "Priya Sharma",
    trainNo: "12147",
    pnr: "AA56789012",
    Price: 1300,
    age: 20,
  },
];

const totalPrice = mybooking.reduce((acc, total) => acc + total.Price, 0);
console.log(`Your booking confired price rs ${totalPrice}`);

// let booking = mybooking.filter((bk) => bk.trainNo === "12147");
// booking = mybooking.filter((bk) => bk.age < 40 && bk.trainNo==="12147");
// console.log(booking);

// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnum = mynum
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num > 43);
// console.log(newnum);
