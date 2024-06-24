const myarr = [0, 3, 2, 3, 4, 9];
// console.log(myarr[1]);

// const newArr = new Array(1, 5, 6, 3, 9);
// console.log(myarr[4]);

// myarr.push(10);
// console.log(myarr);

// myarr.pop(2);
// console.log(myarr); //remove last element

// console.log(myarr.includes(9));

// const UpdateArr = myarr.join();
// console.log(UpdateArr);

// const mySlice = myarr.slice(1, 3);
// console.log("A ", mySlice);

// const mySplice = myarr.splice(1, 3);
// console.log("B ", mySplice);

// const company = ["Hyundai", "Kia", "Honda","MG"];
// const companyCar = ["Creata", "Seltos", "civic","Hector"];

// const cars = company.concat(companyCar);
// console.log(cars);

// const mycars = [...company, ...companyCar];
// console.log(mycars);

// const BundelArr = [1, 2, 4, [3, 2, 4], 2, 3, 6, 9, [3, 4]];
// console.log("Not Arranged", BundelArr);
// const ArrangeArr = BundelArr.flat(Infinity);
// console.log("Arranged", ArrangeArr);

// console.log(Array.isArray("Ravi"));
// console.log(Array.from("1233"));
// console.log(Array.from({name:"Raju"})); //interview question

// let score1 = 344;
// let score2 = 3445;
// let score3 = 3221;

// console.log(Array.of(score1, score2, score3));

// const mysym = Symbol("key1");// interview question
// const Userjs = {
//   name: "RaviKumar",
//   age: 13,
//   Loction: "Delhi",
//   email: "ravidd33#gmail.com",
//   //   [mysym]: "key1", // interview question
//   mysym: "key1",
// };

// Userjs.email = "reshma@gmail.com";
// Userjs.Loction = "bhilai";

// //Object.freeze(Userjs);
// Userjs.Loction = "tumsar";
//console.log(Userjs);
// console.log(Userjs);
// console.log(Userjs[mysym]);// interview question
// Userjs.greeting = function () {
//   console.log("hello everyone");
// };
// console.log(Userjs.greeting());

// Userjs.greeting = function () {
//   console.log(`Hello Mr. ${this.name}`);
// };
// console.log(Userjs.greeting());

//const tinderUser= new Object(); //singleton

const tinderUser = {};

tinderUser.Id = "12@pandit";
tinderUser.name = "ravipandit";
tinderUser.location = "nagpur";

// console.log(tinderUser);

// const newuser = {
//   email: "ravishastri@gmail.com",
//   phoneno: "+233322223",
//   fullname: {
//     firstname: "ravi",
//     secondname: "shastri",
//   },
// };
// console.log(newuser.fullname.secondname,newuser);

// const object1 = { 1: "a", 2: "b" };
// const object2 = { 3: "a", 4: "c" };
// const object3 = { 5: "c", 6: "D" };

// const objectfinal = { ...object1, ...object2, ...object3 };
// console.log(objectfinal);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("age"));

// const course = {
//   coursename: "Js with abhi",
//   instructor: "Abhishek",
//   fees: "2000000000",
// };
// const { coursename } = course;
// console.log(coursename);
