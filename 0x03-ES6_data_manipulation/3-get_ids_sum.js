const getStudentIdsSum = (students) => {
  const summation = students.reduce(
    (accumulator, currentStudent) => accumulator + currentStudent.id,
    0
  );
  return summation;
};

export default getStudentIdsSum;
