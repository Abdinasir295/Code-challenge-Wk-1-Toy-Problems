  //declare a function  
 function calculatePayee(basicSalary) {  
    annualSalary = basicSalary * 12; // Annual basic salary 
    if (annualSalary <= 24000) {    
        return 0;
    }   
    else if (annualSalary <= 520000) {
        return (annualSalary - 240000) * 0.1 / 12; // Multiply by tax rate then divide to get tax paid in a month
    }
    else if (annualSalary <= 884000) {
        return (annualSalary - 520000) * 0.15 / 12 - 2400; // Multiply by tax rate then divide to get tax paid in a month and subtract the personal relief
    }
    else if (annualSalary <= 1320000) {
        return (annualSalary - 884000) * 0.2 / 12 - 2400; // Multiply by tax rate then divide to get tax paid in a month and subtract the personal relief
    }
    else if (annualSalary <= 1840000) {
        return (annualSalary - 1320000) * 0.25 / 12 - 2400; // Multiply by tax rate then divide to get tax paid in a month and subtract the personal relief
    }
    else {
        return (annualSalary - 1840000) * 0.3 / 12 - 2400; // Multiply by tax rate then divide to get tax paid in a month and subtract the personal relief
    }
}   

function calculateNhifDeductions(basicSalary) {
    // Implement NHIF deduction calculation based on the basic salary
    // Placeholder implementation, you need to replace it with the actual calculation
    return 0;
}

function calculateNssfDeductions(basicSalary) {
    return basicSalary * 0.06;  // NSSF rate is 6% of the basic salary
}   

function calculateNetSalary(basicSalary, benefits = 0) {
    payee = calculatePayee(basicSalary);
    nhifDeductions = calculateNhifDeductions(basicSalary);
    nssfDeductions = calculateNssfDeductions(basicSalary);
    grossSalary = basicSalary + benefits;
    netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return netSalary;
} 

// Example usage:
console.log(calculateNetSalary(50000, 2000)); // Calculates net salary for a basic salary of 50,000 Ksh and benefits of 2,000 Ksh
//output