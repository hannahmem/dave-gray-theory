/*
    1. Create a class called "Student"

    2. Allow us to pass in 3 properties/fields to the
       Student constructor which get set to the instance:
       - name (String)
       - major (String)
       - grades (Array of Numbers)

    3. Create a method on "Student" called "addGrade" that
       has one paramater "grade". It will simply push the
       "grade" given on to the "grades" Array.

    4. Create a method on "Student" called "gpa" that will
       return the AVERAGE grade of the student's "grades"

    5. Create an instance of the Student class like so:
       const eva = new Student("Eva", "Arts", [95, 75, 83])

    4. Print out the "eva" instance

    6. Use the "gpa" method on "eva" to print out their average
       grade (Should be 84.33)
*/

class Student {
    constructor(studentName, studentMajor, studentGrade) {
        this.name = studentName;
        this.major = studentMajor;
        this.grades = studentGrade;
    }

    addGrade(grade) {
        if (typeof grade !== "number")
            return false
        return this.grades.push(grade);
    }

    gpa() {
        let average = this.grades.reduce((total, grade) => total + grade);
        average /= this.grades.length;
        return average.toFixed(2);
    }
}

const eva = new Student("Eva", "Arts", [95, 75, 83]);
// console.log(eva);

console.log(eva);
console.log(eva.gpa());

eva.addGrade(87);
console.log(eva);
console.log(eva.gpa());
