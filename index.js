// Function populates a field properties from the elements from passed array of employee details
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

// Converts each emploee Array into an employee record using createEmployeeRecord and accumulates it to a new Array
let createEmployeeRecords = (employeesCardsData) => {
   return employeesCardsData.map((employeeInfo) => {
      return createEmployeeRecord(employeeInfo)
   })
}

let createTimeInEvent = (employeeRecord, dateStamp) => {
   let [date, hour] = dateStamp.split(' ');
   employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
   })
   return employeeRecord
}

let createTimeOutEvent = (employeeRecord, dateStamp) => {
   let [date, hour] = dateStamp.split(' ');
   employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
   })
   return employeeRecord
}

let hoursWorkedOnDate = (employeeRecord, dateOfTheForm) => {
   let clockIn = employeeRecord.timeInEvents.find((e) => e.date == dateOfTheForm).hour
   let clockOut = employeeRecord.timeOutEvents.find((e) => e.date == dateOfTheForm).hour
   return (clockOut - clockIn)/100
}

let wagesEarnedOnDate = (employeeRecord, dateOfTheForm) => {
   const payPerHour = parseInt(employeeRecord.payPerHour)
   const hoursWorked = hoursWorkedOnDate(employeeRecord, dateOfTheForm)
   return payPerHour * hoursWorked
}

let allWagesFor = (employeeRecord) => {
   let employeeWages = []
   let datesWorked = employeeRecord.timeInEvents.map((e) => e.date)
   for (let date of datesWorked) {
      employeeWages.push(wagesEarnedOnDate(employeeRecord, date))
   }
   return employeeWages.reduce((total, wage) => total + wage)
}

let calculatePayroll = (AllEmployeeRecords) => {
   return AllEmployeeRecords.reduce((previoutAmount, employee) => {
      return previoutAmount + allWagesFor(employee)
  }, 0)
}