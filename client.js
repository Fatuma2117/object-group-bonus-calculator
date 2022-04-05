const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function bonusCalculator(employeeArray) {
  //  console.log('expect .09, .06, .15 , 0, 0 (bonusPercentage)
  //console.log('expect 1880, 3810, 7475, 0,0 ');
  //console.log('expect 48800, 67310, 82225, 66000, 35000 ');
  let newEmployeeBonus = []
  for (let employee of employeeArray) {
    let name = employee.name;
    let bonusPercentage = 0;

    if (employee.reviewRating <= 2) {
      bonusPercentage = 0;
    }
    else if (employee.reviewRating === 3) {
      bonusPercentage = .04;
    }
    else if (employee.reviewRating === 4) {
      bonusPercentage = .06;
    } else if (employee.reviewRating === 5) {
      bonusPercentage = .10;
    }
    if (employee.employeeNumber.length === 4) {
      bonusPercentage += .05;
    }
    console.log(employee.annualSalary)
    if (Number(employee.annualSalary) > 65000 && bonusPercentage >= .01) {
      bonusPercentage -= .01;
    }
    if (bonusPercentage > .13) {
      bonusPercentage = .13;
    }
    let totalBonus = Number(employee.annualSalary) * bonusPercentage;
    let totalCompensation = Number(employee.annualSalary) + totalBonus;
    // console.log(employee)// shows iteration

    newEmployeeBonus.push(
      {
        name: name,
        bonusPercentage: bonusPercentage,
        totalCompensation: totalCompensation,
        totalBonus: totalBonus
      });
  }
  return newEmployeeBonus
}

bonusCalculator(employees)
// 



console.log(employees);
console.log(bonusCalculator(employees))