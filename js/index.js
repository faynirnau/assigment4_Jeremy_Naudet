class Person{

    constructor(firstName, lastName, yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    
    setYearOfBirth(yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }
    
    getAge(){
        return new Date().getFullYear() - this.yearOfBirth;
    }

    printsAllInformations() {
        return "My name is : " + this.getFullName() + " I am " + this.getAge() + " years old";
    }

}

class Student extends Person{

    constructor(firstName, lastName, yearOfBirth, group, isErasmus, grades) {
        super(firstName, lastName, yearOfBirth);
        this.group = group;
        this.isErasmus = isErasmus;
        this.grades = grades;
    }

    getGroup() {
        return this.group;
    }

    getIsErasmus(){
        return this.isErasmus;
    }

    averageGrade(){
        let sum = 0;
        this.grades.forEach(grade => {
            sum += grade;
        });
        return sum / this.grades.length;
    }

    display() {
        var erasmus;
        if (this.isErasmus == true) {
            erasmus = "This student is part of Erasmus program.\n";
        } else {
            erasmus = "This student is not part of Erasmus program.\n";
        }

        return "Student's name is " + this.getFullName() + 
        ", he is " + this.getAge() + " years old.\n" + 
        "He is part of goup " + this.getGroup() + ".\n"+
        erasmus + 
        "His grades are : " + this.grades.toString();
    }

}

// A list of French firstnames
const FIRSTNAMES = [
    "Kylian",
    "Elijah",
    "Milan",
    "Côme",
    "Tiago",
    "Isaac",
    "Marlon",
    "Elias",
    "Lily",
    "Ulysse",
    "Abdonie",
    "Amandine",
    "Antoine",
    "Maxime",
    "Servane",
    "Edgard",
    "Francis"
];

// A list of French lastnames
const LASTNAMES = [
    "Simon",
    "Michel",
    "Dupuis",
    "Petit",
    "Durand",
    "Dumont",
    "Martin",
    "Bernard",
    "Thomas",
    "Robert",
    "Muller",
    "Lefevre",
    "Faure",
    "Andre",
    "Mercier",
    "Blanc",
    "Guerin",
    "Boyer"
];

// Student generator ^^

let students = [];
for (let n = 0; n < 10; n++) {
    let indexLastnames = Math.floor(Math.random()*LASTNAMES.length);
    let indexFirstnames = Math.floor(Math.random()*FIRSTNAMES.length);
    let isErasmusBool = Math.floor(Math.random()*2);
    if (isErasmusBool == 0) {
        isErasmusBool = false;
    }else {
        isErasmusBool = true;
    }
    let grades = new Array();
    for(let i = 0; i < 8; i++) {
        let grade = Math.floor(Math.random()*(6-1)+1);
        grades.push(grade);
    };
    let student = new Student(
        FIRSTNAMES[indexFirstnames],
        LASTNAMES[indexLastnames],
        Math.floor(Math.random()*(2005-2000)+2000),
        Math.floor(Math.random()*(4-1)+1),
        isErasmusBool,
        grades
        );
    students.push(student);
}

// find the student with the hightest average grade.
let studentWithHightestAverage = students[0]
students.forEach(student => {
    if (student.averageGrade() > studentWithHightestAverage.averageGrade()) {
        studentWithHightestAverage = student;
    }
});

var orderedListOfStudents = new Array();
students.forEach(student => {
    orderedListOfStudents.push(student);
});

for (let i = 0; i < orderedListOfStudents.length-1; i++) {
    let indexWithHightestAverage = i;
    for(let j = i+1; j < orderedListOfStudents.length ; j++) {
       if(orderedListOfStudents[indexWithHightestAverage].averageGrade() <= orderedListOfStudents[j].averageGrade()){
            indexWithHightestAverage = j;
       }
    }
    let buff = orderedListOfStudents[i];
    orderedListOfStudents[i] = orderedListOfStudents[indexWithHightestAverage];
    orderedListOfStudents[indexWithHightestAverage] = buff;
};

var erasmusStudents = new Array();
students.forEach(student=> {
    if (student.getIsErasmus() == true) {
        erasmusStudents.push(student);
    }
});