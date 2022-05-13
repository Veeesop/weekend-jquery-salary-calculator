let totalMonthlyPayout;
let employeeList = [];

function checkInputs(){
    if  
}

function getInputs() {
  let newEmployee = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    employeeId: $("#employeeId").val(),
    title: $("#title").val(),
    annualSalary: $("#annualSalary").val(),
  };
  console.log(newEmployee);
  employeeList.push(newEmployee);
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
