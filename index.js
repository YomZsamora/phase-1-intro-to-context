// Your code here
let createEmployeeRecord = (employeeCard) => {
   return {
      firstName: employeeCard[0],
      familyName: employeeCard[1],
      title: employeeCard[2],
      payPerHour: employeeCard[3],
      timeInEvents: [],
      timeOutEvents: []
   }
}

let createEmployeeRecords = (employeesCardsData) => {
   return employeesCardsData.map((employeeInfo) => {
      return createEmployeeRecord(employeeInfo)
   })
}

let createTimeInEvent = (employeeRecord, dateStamp) => {
   
}