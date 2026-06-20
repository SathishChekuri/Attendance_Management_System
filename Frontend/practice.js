// console.log("Welcome")
// var a=10
// var b=10
// var c=10
// if(a>b){
//  if(a>c) console.log(a);
//  else console.log(c);
// } 
// else if (b>c) console.log(b);
//else console.log(c);
// console.log(a===b)
// if(true){
//     const c=100;
//     console.log(c);
// }
// console.log(c)
// const a=10
// const a=30
// const obj1={
//     name:"samsung",
//     disc:"stylishname",
//     price:200000
// }
// const obj2={
//     name:"vo",
//     disc:"stylishname",
//     price:200000
// }
// const obj3={
//     name:"Redmi",
//     disc:"stylishname",
//     price:200000
// }
// const ar2=[obj1,obj2,obj3]
// for(let i of ar2){
//     for(let j in i) console.log(i[j]);
// }
// mern()
// function mern(){
//     console.log("MERN")
// }

// const fun=function(){
//     console.log("Welcome to class");
// }
// fun()
// const backend=()=>{
//     console.log("Lets start bakend");
//     return "hi";
// }
// const a=()=>"hi bro"
// const b=a()
// console.log(b);
// const highorder=(a)=>{
//     console.log("Higher order function");
//     a()
// }
// const callbackfunct=()=>{
//     console.log("I am in callback function");
// }
// highorder(callbackfunct)
// const ar=[1,2,3,4];
// const arr2=ar.map((num)=>num*2);
// console.log(arr2)
// const ar=[1,2,3,4,5,6,7,[1,2,3]]
// console.log(ar.push(8))
// console.log(ar)
// // ar.pop()
// console.log(ar.pop())
// console.log(ar.shift())
// console.log(ar)
// console.log(ar.unshift())
// console.log(ar)
// console.log(ar.splice(0,2.99))
// conrsole.log(ar)
// const arr=[110,"rahul",45,"sam"]
// arr.splice(2,1,6);
// console.log(arr);
// arr.splice(0);
// console.log(arr);
// console.log(arr.includes(110))
// console.log(arr.indexOf(110));
// console.log(arr.indexOf(111));
// const ar=[
//     {
//         rollno:"24AG1A0553",
//         name:"ramu",
//         dept:"cse"
//     },
//     {
//         rollno:"24AG1A0554",
//         name:"samyel",
//         dept:"csd"
//     },
//     {
//         rollno:"24AG1A0555",
//         name:"sam",
//         dept:"csm"
//     },
//     {
//         rollno:"24AG1A0556",
//         name:"rahul",
//         dept:"cse"
//     }
// ]
// const a=(ar.find(s=>s.rollno=="24AG1A0555"))
// console.log(a)
// const al=(ar.findIndex(s=>s.rollno=="24AG1A0555"))
// console.log(al)
// ar.forEach(element => {console.log(element.name) 
// });//forEach method is used to iterate Each Element of array.
// ar.map(student=>console.log(student))
// const a1=[1,2,3,4];
// const a2=a1.map(m=>m+5)
// console.log(a2)
// const a3=a1.forEach(m=>m+5)
// console.log(a3)
// const a4=ar.filter(s=>s.dept=="cse");
// console.log(a4);
// console.log(a4.length);
//  const a=[900,60,670,70,90,100];
// // a.sort(
// //     (a,b)=>a-b
// // )
// // console.log(a)
// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
//   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
//   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
//   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

//   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
//   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
//   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
//   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
//   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

//   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
//   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
//   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
//   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
//   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

//   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
//   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
//   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
//   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
//   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

//   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
//   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
//   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
//   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
//   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

//   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
//   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
//   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
//   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
//   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// ];
// const pass=students.filter(student=>student.marks>=35)
// console.log(pass.length)
// console.log(pass)
// const pass1=students.filter(student=>student.marks>=35&&student.department=="CSE")
// console.log(pass1.length)
// console.log(pass1)
// const pass2=students.filter(student=>student.marks>=35&&student.department=="CSM")
// console.log(pass2.length)
// console.log(pass2)
// const pass3=students.filter(student=>student.marks>=35&&student.department=="CSD")
// console.log(pass3.length)
// console.log(pass3)
// const pass4=students.filter(student=>student.marks>=35&&student.department=="CSO")
// console.log(pass4.length)
// console.log(pass4)
// const pass5=students.filter(student=>student.marks>=35&&student.department=="IT")
// console.log(pass5.length)
// console.log(pass5)
// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ];
// const placed=students.filter(students=>students.placed==true);
// console.log("Students place");
// console.log(placed)
// console.log("Students placed, package")
// placed.forEach(students=>console.log(students.name,students.package))
// const t=placed.reduce((t,s)=>t+s.package,0);
// console.log(t/placed.length);
// const srt=placed.sort((a,b)=>b.package-a.package)
// console.log(srt[0].name,srt[0].package)
// console.log("Students got more than 10lpa")
// const pl=students.filter(students=>students.package>10);
// pl.forEach(s=>console.log(s.name));
// let p=document.createElementById("p");
// p.innertext="Like"
// const container=document.getElementById()
let isLiked = false;
let p = document.createElement("p")
p.innerText = "Like"
const container = document.getElementById("container")
const paragraph =document.getElementById("paragraph")
function heartColorChange() {
    const heart = document.getElementById("heartid");

    if (isLiked) {
        heart.src = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"; // empty heart
        p.innerText = "dislike"
        container.appendChild(p)
    } else {
        heart.src = "https://cdn-icons-png.flaticon.com/512/833/833472.png"; // red heart
        p.innerText = "   like"
        container.appendChild(p)
    }

    isLiked = !isLiked;
}
