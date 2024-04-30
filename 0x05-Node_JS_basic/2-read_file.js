const fs = require('fs');

function countStudents(path) {
  try {
    // Synchronously read the CSV file
    const data = fs.readFileSync(path, 'utf8');

    // Parse CSV data
    const students = [];
    const lines = data.split('\n');

    // Skip the header line (first line)
    lines.shift();

    // Iterate through each line and parse student information
    for (const line of lines) {
      if (line.trim() !== '') {
        const [firstname, lastname, age, field] = line.split(',');
        students.push({
          firstname,
          lastname,
          age,
          field,
        });
      }
    }

    // Filter out invalid students (those with empty lines)
    const validStudents = students.filter((student) => student.firstname);

    // Count the number of students in each field
    const fieldCounts = {};
    validStudents.forEach((student) => {
      if (fieldCounts[student.field]) {
        fieldCounts[student.field] += 1;
      } else {
        fieldCounts[student.field] = 1;
      }
    });

    // Log the results
    console.log(`Number of students: ${validStudents.length}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const studentsInField = validStudents.filter(
          (student) => student.field === field
        );
        const firstNameList = studentsInField
          .map((student) => student.firstname)
          .join(', ');
        console.log(
          `Number of students in ${field}: ${fieldCounts[field]}. List: ${firstNameList}`
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
