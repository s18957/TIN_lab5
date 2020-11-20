function Student(fname, lname, id, grades) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
    this.grades = grades;
    this.averageGrade = function () {
        let sum = 0;
        this.grades.forEach(e => sum += e);
        return (sum / grades.length).toPrecision(3);
    }
    this.printStudent = function () {
        return this.fname + " " + this.lname + "'s average grade is " + this.averageGrade();
    }
}


let student = new Student("Iryna", "Kurganova", "1", [4,5,4,3,3,4,5,2,4]);
console.log(student.printStudent());