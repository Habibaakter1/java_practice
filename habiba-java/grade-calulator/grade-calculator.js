const marksInput = document.getElementById('score');
const calculateGradeBtn = document.getElementById('calculate-btn');
const gradeDisplay = document.getElementById('result');
const errorMessage = document.getElementById('error-message');

calculateGradeBtn.addEventListener('click', function () {
  const score = getMarks();

  if (!isValidInput(score)) {
    errorMessage.className = 'text-sm text-red-800';
    return;
  }
  errorMessage.className = 'hidden';

  const grade = calculateGrade(score);

  showGrade(grade);
});

function getMarks() {
  return parseFloat(marksInput.value);
}

function isValidInput(score) {
  if (marksInput.value === '') {
    errorMessage.innerText = 'Please input a number';

    return false;
  }

  if (score < 0 || score > 100) {
    errorMessage.innerText = 'Invalid Input';
    return false;
  }

  return true;
}

function calculateGrade(marks) {
  let grade = '';

  if (marks >= 80 && marks <= 100) {
    grade = 'A+';
  } else if (marks >= 70 && marks < 80) {
    grade = 'A';
  } else if (marks >= 60 && marks < 70) {
    grade = 'A-';
  } else if (marks >= 50 && marks < 60) {
    grade = 'B';
  } else {
    grade = 'F';
  }

  return grade;
}

function showGrade(grade) {
  gradeDisplay.innerText = grade;
  if (grade === 'F') {
    gradeDisplay.style.color = 'red';
  }
}
