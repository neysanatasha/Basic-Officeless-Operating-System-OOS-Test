const data = {
    "data": {
      "companyName": "Jojonomic",
      "numberOfEmployee": 100,
      "receiveNewEmployee": true,
      "location": {
        "address": "jl. nangka no 5",
        "province": "DKI Jakarta"
      },
      "employeeList": [{
          "name": "Employee 1",
          "age": 25
        },
        {
          "name": "Employee 2",
          "age": 26
        }
      ]
    }
  };
  
  const companyName = data.data.companyName;
  const numberOfEmployee = data.data.numberOfEmployee;
  const province = data.data.location.province;
  const employee2Age = data.data.employeeList[1].age;
  
  console.log("Company Name: " + companyName);
  console.log("Number of Employees: " + numberOfEmployee);
  console.log("Province: " + province);
  console.log("Employee 2 Age: " + employee2Age);