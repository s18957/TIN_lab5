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

//console.log(student.printStudent());

Object.defineProperties(Student.prototype, {
    avgGrade: {
        get: function () {
            return this.averageGrade();
        }
    },
    fullName: {
        get: function () {
            return this.fname + " " + this.lname;
        },
        set: function (arr) {
            this.fname = arr[0];
            this.lname = arr[1];
        }
    }
});

let student = new Student("", "", "1", [4,5,4,3,3,4,5,2,4]);
console.log("---" + student.fname)
student.fullName = ["Iryna", "Kurganova"];
console.log("---" + student.fname)
