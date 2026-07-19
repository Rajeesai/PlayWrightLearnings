var Student = /** @class */ (function () {
    function Student(name, cou) {
        console.log("This is Constructor");
        this.studentName = name;
        this.course = cou;
    }
    Student.prototype.displayDetails = function () {
        console.log("Student Name is ", this.studentName);
        console.log("password is ", this.course);
    };
    return Student;
}());
var employee1 = new Student("Hari", "PlayWright with TypeScript");
var employee2 = new Student("Ram", "Selenium with Java");
employee1.displayDetails();
employee2.displayDetails();
