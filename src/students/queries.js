const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1"; //dollar sign is like a parameter we will be passing in to the query.
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent = "INSERT INTO students (name, email, age , dob) VALUES ($1, $2, $3, $4)"; //the dollar signs are the parameters through which the arguments will be passed through to the query.
const removeStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

module.exports = {
       getStudents,
       getStudentById,
       checkEmailExists,
       addStudent,
       removeStudent,
       updateStudent,
}