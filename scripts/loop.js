// loop
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}
// while loop
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}
// Each Loop
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

studentReport.forEach(report => {
  if (report < LIMIT) {
    console.log(report);
  }
});
// For in loop
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index]);
  }
}
//dynamically
const DAYS = 6;
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let today = new Date().getDay(); // Get the index of today's day (0 for Sunday, 1 for Monday, etc.)
for (let i = 0; i < DAYS; i++) {
  let nextDayIndex = (today + i) % 7; // Calculate the index of the next day, looping back to Sunday if needed
  console.log(dayNames[nextDayIndex]);
}
