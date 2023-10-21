const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
       pool.query(queries.getStudents, (error, results)=>{
              if (error) throw error;
              res.status(200).json(results.rows);
       })
};

const getStudentById = (req, res)=> {
       const id = parseInt(req.params.id); //get the id parameter from the uri and store it in const id, it will be used to query the database.
       pool.query(queries.getStudentById, [id], (error, results)=>{
              if(error) throw error;
              res.status(200).json(results.rows);
       })
};

const addStudent = (req, res)=>{
       const {name, email, age, dob} = req.body; //req.body is an object with key/ values items and we use destructuring to get those items from the req.body.

       //logic to check if the email already exists.
       pool.query(queries.checkEmailExists, [email], (error, results)=>{
              if(results.rows.length) {
                     res.send("Email already Exists.");
              } // if there is an array that already exists with a row then...
       });

       //logic for adding the student to the db if the email does not exist.
       pool.query(queries.addStudent, [name, email, age, dob], (error, results)=>{
              if (error) throw error;
              res.status(201).send("Student created successfully!");
       });
};

const removeStudent = (req, res)=>{
       const id = parseInt(req.params.id);

       pool.query(queries.removeStudent, [id], (error, results)=>{
              const noStudentFound = !results.rows.length;
              if(noStudentFound){
              res.send("Student does not exist in the database");
              }

              pool.query(queries.removeStudent, [id], (error, results)=>{
                     if(error)throw error;
                     res.status(200).send("student removed successfully");
              });
       });
};

const updateStudent= (req, res)=>{
       const id = parseInt(req.params.id);
       const {name} = req.body;

       pool.query(queries.getStudentById, [id], (error, results)=>{
              const noStudentFound = !results.rows.length;
              if(noStudentFound){
                     res.send("student does not exist in the database");
              }

              pool.query(queries.updateStudent, [name, id], (error, results)=>{
                     if (error) throw error;
                     res.status(200).send("student updated successfully");
              });
       });
}



module.exports= {
       getStudents,
       getStudentById,
       addStudent,
       removeStudent,
       updateStudent
}