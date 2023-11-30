
function salary(wage, hours, days) {
    const monthlySalary = wage * hours * days
    return monthlySalary
  }
  
 
  function taxed(amount, taxPercent) {
    const taxAmount = (amount * taxPercent) / 100
    const netAmount = amount - taxAmount
    return netAmount
  }
  
  
  const wagePerHour = 500
  const averageDailyHours = 8
  const averageWorkingDays = 22
  
  
  const grossMonthlySalary = salary(wagePerHour, averageDailyHours, averageWorkingDays)
  const netMonthlySalary = taxed(grossMonthlySalary, 15)
  
  
  document.body.innerHTML = (`Vaše měsíční mzda po 15% zdanění je: ${netMonthlySalary} Kč`)
  