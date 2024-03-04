
// Mô phỏng dữ liệu cho bảng kỳ thi
var examData = [
    { id: 1, name: "Midterm Exam", amount: 100, averageScores: 85, completionRate: "90%" },
    { id: 2, name: "Final Exam", amount: 120, averageScores: 80, completionRate: "95%" }
];

// Hiển thị dữ liệu cho bảng kỳ thi
var testTableBody = document.getElementById("testTableBody");

examData.forEach(function(exam) {
    var row = document.createElement("tr");

    row.innerHTML = "<th scope='row'>" + exam.id + "</th>" +
                    "<td>" + exam.name + "</td>" +
                    "<td>" + exam.amount + "</td>" +
                    "<td>" + exam.averageScores + "</td>" +
                    "<td>" + exam.completionRate + "</td>" +
                    "<td><a href='/pages/editExam.html?id=" + exam.id + "'>Edit</a></td>";

    testTableBody.appendChild(row);
});

// Mô phỏng dữ liệu cho bảng người dùng
var userData = [
    { id: 1, studentID: "S001", name: "John Doe", class: "Class A" },
    { id: 2, studentID: "S002", name: "Jane Smith", class: "Class B" }
];

// Hiển thị dữ liệu cho bảng người dùng
var userTableBody = document.getElementById("userTableBody");

userData.forEach(function(user) {
    var row = document.createElement("tr");

    row.innerHTML = "<th scope='row'>" + user.id + "</th>" +
                    "<td>" + user.studentID + "</td>" +
                    "<td>" + user.name + "</td>" +
                    "<td>" + user.class + "</td>" +
                    "<td><a href='/pages/editUser.html?id=" + user.id + "'>Edit</a></td>";

    userTableBody.appendChild(row);
});
