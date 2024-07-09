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

// function addTwonumber(number1, number2) {
//   //console.log(number1 + number2);
//  // let result = number1 + number2; ////Type 1
//   //return number1 + number2;  //// Type 2
// }
// const result = addTwonumber("ravi", 8);
// console.log(result);

// function loginusername(username="sam") {
//   if (!username) {
//     console.log("Please enter Detail");
//     return;
//   }
//   return `${username},logged in`;
// }
// console.log(loginusername("ravi"));

// function calculateCartPrice(num1) {
//   return num1;
// }
// console.log(calculateCartPrice(2));

// const user={
//     username:"ravi",
//     age:"23"
// }
// function handleObjeect(detail){

//     console.log(`passanger name is ${detail.username} and its age is ${detail.age}`)

// }
// handleObjeect(user)

// let age = 10;
// const ages = 18;
// var mark = 20;

// if (true) {    // this is scope
//       let age=10
//   const ages=18
//   var mark=20
// }
// console.log(mark);

// function one() {
//   const name = "Ravi";

//   function two() {
//     const username = "youtube";
//     console.log(name);
//   }
//   two();
// }
// one();

// if(true){
//     const username="ravi"
//     if(username==="ravi"){
//         const website =" youtube";
//         console.log(username+website)
//     }

// }

// +++++++++++++++++++++++++++++++++++++++++++++++++Intersting+++++++++++++++++++++++++++++++++++++++++++++++++++//

// function addone(num){
//     console.log(num+2)

// }
// addone(3)

// const addtwo= function (num){
//     console.log(num)
// }
// addtwo(4)

// const user = {
//   username: "sam",
//   age: 12,

//   welcomeMessage: function () {
//     if ((this.username =="ravi")) {
//       console.log(`${this.username} welcome to the website`);
//     } else {
//       console.log(`${this.username} You are no longer user`);
//     }
//   },
// };
// user.welcomeMessage();

// const arrow= (num1,num2) =>{
//     return num1+num2

// }
// console.log(arrow(2,4))

// const detail = () => ({Username:"hello"});
// console.log(detail());

// (function chai(){
//     console.log(`Db connect`)
// }
// )();

// ( (name)=>{
//     console.log(`Db connect two ${name}`)
// })('ravi')

// const limit=20
// if(limit>100)
//     {
//         let power="high speed";
//         console.log(`Vehichle ${power}`)
//     }
//     else{
//         let power="MAINTAIN this speed";
//         console.log(`great ${power}`)
//     }

// const month= 5

// switch (month) {
//     case 1:
//     console.log("jan")
//         break;

//         case 2:
//     console.log("feb")
//         break;

//         case 3:
//     console.log("March")
//         break;

//         case 4:
//     console.log("April")
//         break;

//         case 5:
//             console.log("may")
//                 break;
//     default:
//         console.log("Invalid month")
//         break;
// }

// const emptyObj ={NAME:"ess"}

// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty")
// }
// else {
//     console.log(Object.keys(emptyObj));
// }

// for (let i = 1; i < 10; i++) {
//       console.log(`first process step 1 ${i}`)
//     for (let j = 1; j < 10; j++) {
//       console.log(`inclufing i process: ${i} i++ process ${j} `)

//     }

// }

// for (let i = 0; i <= 20; i++) {
//   console.log(`table of ${i}`);
//   for (let j = 0; j <= 20; j++) {
//     console.log(i + "*" + j + "= " + i * j);
//   }
// }

// let myhero = ["superman", "batman", "pikachu"];

// let array = 0;

// while (array <myhero.length) {
//   console.log(`value is ${myhero[array]}`);
//   array = array + 1;
// }

// +++++++++++++++++++++++++++++++++++++++for of loop++++++++++++++++++++++++++++++++++++++++++++++++

// const word="raju"

// for (const spelling of word) {
//     console.log(`spelling of ${spelling}`);

// }

// const map =new Map()
// map.set('In','India')
// map.set('Fr','france')
// map.set('C.g','Durg')

// for (const [maps,keys] of map) {
//     console.log(maps,keys)

// }

// const mylanguage = {
//   js: "javascript",
//   cpp: "C plus plus",
//   rb: "ruby",
// };
// for (const key in mylanguage) {
//   console.log(`${key} is called as ${mylanguage[key]}`);
// }

// const mycode=["rb","phy","cpp","java","swift"]

// mycode.forEach( (key)=> {
//     console.log(key)
// });

// const fullform=[
//     {
//         shortform:"js",
//         Longform:"Java Script"
//     },
    
//     {
//         shortform:"Py",
//         Longform:"Python"
//     },
//     {
//         shortform:"rb",
//         Longform:"ruby"
//     }
// ]

// fullform.forEach((details)=>{
//     console.log(details.Longform)
// }
// )

