 let student = {
     courses: ["TIN", "BYT", "ZPR", "LEK"]
 }
 let names = ["Merit", "Gil", "Rica", "Woodie", "Bernadette"];

 function randomName() {
     return names[Math.random() * 5]
 }

 let students = [];
 function createNewStudents(limit) {
     for (let i = 1; i <= limit; i++) {/         let stud = Object.create(student);
         stud.fname = randomName();
         stud.lname = randomName();
         stud.id = i;
         students.push(stud);
     }
 }
 createNewStudents(10);
