const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/LoanWise/g, 'Load Rate');
html = html.replace(/Loan<span>Wise<\/span>/g, 'Load<span>Rate</span>');
html = html.replace(/loanwise-calculator\.com/g, 'loadrate-calculator.com');

fs.writeFileSync('index.html', html);
console.log('Renamed successfully');
