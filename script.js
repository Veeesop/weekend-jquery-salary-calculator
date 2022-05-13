let totalMonthlyPayout;
let employeeInput;

function getInputs() {
  let newEmployee = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    employeeId: $("#employeeId").val(),
    title: $("#title").val(),
    annualSalary: $("#annualSalary").val(),
  };
  console.log(newEmployee);
  employeeInput = newEmployee;
}
function displayEmployee() {
  $(".employeeTable").append(`
    <tr>
        <td>${employeeInput.firstName}</td>
        <td>${employeeInput.lastName}</td>
        <td>${employeeInput.employeeId}</td>
        <td>${employeeInput.title}</td>
        <td>${employeeInput.annualSalary}</td>
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
    displayEmployee();
  });
});
