let totalAnnual = 0;
let totalMonthlyPayout;
let employeeList = [];

function getInputs() {
  let newEmployee = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    employeeId: $("#employeeId").val(),
    title: $("#title").val(),
    annualSalary: Math.floor(Number($("#annualSalary").val())),
  };
  if (checkInputs(newEmployee) === false) {
    return;
  } else {
    employeeList.push(newEmployee);
    displayEmployee(newEmployee);
    console.log(newEmployee);
  }
}
function checkInputs(newEmployee) {
  if (newEmployee.employeeId.length !== 4) {
    alert("Employee Numbers are 4 digits");
    return false;
  } else if (isNaN(newEmployee.annualSalary)) {
    alert("Salaries must be numbers");
    return false;
  }
}

function displayEmployee(newEmployee) {
  $(".employeeTable").append(`
    <tr>
        <td>${newEmployee.firstName}</td>
        <td>${newEmployee.lastName}</td>
        <td>${newEmployee.employeeId}</td>
        <td>${newEmployee.title}</td>
        <td>${newEmployee.annualSalary}</td>
        <td><img src="icons8-trash-48.png" alt="" class='trash'></td>
    </tr>
    `);
}

function clearInputs() {
  $("#firstName").val("");
  $("#lastName").val("");
  $("#employeeId").val("");
  $("#title").val("");
  $("#annualSalary").val("");
}

function totalMonthly(salaries) {
  for (salary of salaries) {
    totalAnnual += salary.annualSalary;
    console.log(salary.annualSalary);
  }
  totalMonthlyPayout = Math.floor(totalAnnual / 12);
  $(".totalMonthlyAmount").text(`$${totalMonthlyPayout}`);
}

function turnRed() {
  if (totalMonthlyPayout > 20000) {
    $(".totalMonthlyAmount").css("background-color", "red");
  }
}

$(document).ready(function () {
  console.log("ready!");
  $("#submitButton").on("click", () => {
    getInputs();
    clearInputs();
    totalMonthly(employeeList);
    turnRed();
  });
});

$(document).on("click", ".newBox", removeBox);
