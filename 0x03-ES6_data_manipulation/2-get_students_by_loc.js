const getListStudentsByLocation = (students, city) => {
  const filteredByLocation = students.filter(
    (student) => student.location === city
  );
  return filteredByLocation;
};

export default getListStudentsByLocation;
