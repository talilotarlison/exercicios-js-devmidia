const dateObj = new Date('2021-01-01');
const monthNameLong = dateObj.toLocaleString('en-US', { month: 'long' });
const monthNameShort = dateObj.toLocaleString('en-US', { month: 'short' });

console.log(monthNameLong); // Janeiro
console.log(monthNameShort); // Jan


const meses = ['Janeiro', 'Fevereiro', 'Março', /* ... */, 'Dezembro'];
const dateObj1 = new Date('2021-01-01');
const monthIndex = dateObj1.getMonth();
const monthName = meses[monthIndex];

console.log(monthName); // Janeiro
