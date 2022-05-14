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
    newEmployee = {};
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
    <tr class='employeeDisplay'>
        <td class='firstName'>${newEmployee.firstName}</td>
        <td class='lastName'>${newEmployee.lastName}</td>
        <td class='employeeId'>${newEmployee.employeeId}</td>
        <td class='title'>${newEmployee.title}</td>
        <td class='annualSalary'>${newEmployee.annualSalary}</td>
        <td class='trash'><button class='trash'><img src="icons8-trash-48.png" alt="" class='trash'></button></td>
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
  }
  totalMonthlyPayout = Math.floor(totalAnnual / 12);
  $(".totalMonthlyAmount").text(`$${totalMonthlyPayout}`);
}

function turnRed() {
  if (totalMonthlyPayout > 20000) {
    $(".totalMonthlyAmount").css("background-color", "red");
  }
}

function removeEmployee() {
  $(this).parent().remove();
}
function testFunction() {
  console.log("test success");
}

$(document).ready(function () {
  console.log("ready!");
  $(document).on("click", "#submitButton", () => {
    getInputs();
    clearInputs();
    totalMonthly(employeeList);
    turnRed();
    console.log("test");
  });
  $(document).on("click", ".trash", removeEmployee);
});
