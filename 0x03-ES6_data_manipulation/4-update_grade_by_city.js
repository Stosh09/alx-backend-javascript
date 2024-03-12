const updateStudentGradeByCity = (students, city, newGrades) =>
  students
    // Filter students based on the specified city
    .filter((student) => student.location === city)
    // Map over the filtered students to update their grade Info
    .map((student) => {
      // Find the grade information for the current student in the newGrades array
      const gradeInfo = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return {
        ...student,
        // If gradeInfo exists, update the student's grade, otherwise set it to 'N/A'
        grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
export default updateStudentGradeByCity;
