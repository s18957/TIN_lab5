class Student {
    constructor(fname, lname, id, grades) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
        this.grades = grades;
    }
    averageGrade = function () {
        let sum = 0;
        this.grades.forEach(e => sum += e);
        return (sum / grades.length).toPrecision(3);
    }
    printStudent = function () {
        return this.fname + " " + this.lname + "'s average grade is " + this.averageGrade();
    }
    get avgGrade() {
        return this.averageGrade();
    }
    get fullName() {
        return this.fname + " " + this.lname;
    }
    set fullName(arr) {
        this.fname = arr[0];
        this.lname = arr[1];
    }
}
let student = new Student("", "", "1", [4,5,4,3,3,4,5,2,4]);
console.log("---" + student.fname);
student.fullName = ["Iryna", "Kurganova"];
console.log("---" + student.fname);