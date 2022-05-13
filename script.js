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
  if (!checkInputs(newEmployee)) {
    return;
  } else {
    employeeList.push(newEmployee);
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

function displayEmployee(employeeList) {
  for (employee of employeeList)
    $(".employeeTable").append(`
    <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.employeeId}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
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

$(document).ready(function () {
  console.log("ready!");
  $("#submitButton").on("click", () => {
    getInputs();
    clearInputs();
    displayEmployee(employeeList);
  });
});
