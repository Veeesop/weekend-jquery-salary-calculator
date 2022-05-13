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
  totalMonthlyPayout = totalAnnual / 12;
  $(".totalMonthlyAmount").text(`${totalMonthlyPayout}`);
}

$(document).ready(function () {
  console.log("ready!");
  $("#submitButton").on("click", () => {
    getInputs();
    clearInputs();
    totalMonthly(employeeList);
  });
});
