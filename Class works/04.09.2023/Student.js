class Student {
    constructor (student_name, student_grades, student_age) {
        this.name = student_name
        this.grades = student_grades
        this.age = student_age
    }
    print_avg() {
        let sum = 0
        this.grades.forEach(grade => sum += grade)
        let avg = sum / this.grades.length
        document.write(`Student ${this.name} avg:${avg}`)
    }
    say_hello() {
        console.log('hello');
    }
}

