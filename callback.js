var students = [{ name: "Ashwani", age: 23 }, { name: "Varsha", age: 23 }];

function enrollStudent(student, getStudent) {
    setTimeout(function () {
        students.push(student);
        console.log("student has been enrolled.");
        getStudent();
    }, 2000);
    
}

function getStudent() {
    setTimeout(() => {
        str = "";
        let student = document.getElementById("students");
        students.forEach(function (element) {
            str += `<li>${element.name}</li>`;
        })
        student.innerHTML = str;
        console.log("Student data is fetched");

    },2000);
}

let newStudent = { name: 'Sudhir', age: 23 };
enrollStudent(newStudent, getStudent);
