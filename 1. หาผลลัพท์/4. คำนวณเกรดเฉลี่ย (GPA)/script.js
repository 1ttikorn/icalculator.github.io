let courses = [];

function addCourse() {
    const credits = parseFloat(document.getElementById("credits").value);
    const grade = parseFloat(document.getElementById("grade").value);

    if (isNaN(credits) || isNaN(grade) || credits <= 0) {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง");
        return;
    }

    courses.push({ credits, grade });

    displayCourses();
}

function displayCourses() {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";

    courses.forEach((course, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `รายวิชาที่ ${index + 1}: ${course.credits} หน่วยกิต, เกรด ${course.grade}`;
        courseList.appendChild(listItem);
    });
}

function calculateGPA() {
    if (courses.length === 0) {
        alert("กรุณาเพิ่มรายวิชาก่อนคำนวณ GPA");
        return;
    }

    let totalCredits = 0;
    let weightedSum = 0;

    courses.forEach(course => {
        totalCredits += course.credits;
        weightedSum += course.credits * course.grade;
    });

    const gpa = weightedSum / totalCredits;

    const result = `GPA ทั้งหมด: ${gpa.toFixed(2)}`;

    document.getElementById("result").innerHTML = result;
}
