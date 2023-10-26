const {Router} = require('express');
const controller = require('./controllers');

const router = Router();

/**
 * @swagger
 * /tags:
 *   name: Students
 *   description: API endpoints to manage students data
 */

/**
 * @swagger
 *   /api/v1/students:
 *     get:
 *       summary: Get all students
 *       tags: [students]
 *       responses:
 *         "200":
 *           description: The list of all students
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Students'
 */
router.get('/', controller.getStudents);



/**
 * @swagger
 *   /api/v1/students:
 *     post:
 *       summary: Creates a new student
 *       tags: [students]
 *       requestBody:
 *           required: true
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Students'
 *       responses:
 *         "201":
 *           description: Student created successfully
 *           contents:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     example: "johndoe@gmail.com"
 *                   age:
 *                     type: integer
 *                     example: 20
 *                   dob:
 *                     type: string
 *                     format: date
 *                     example: "2000-01-01"
 */
router.post("/", controller.addStudent);


/**
 * @swagger
 *   /api/v1/students/{id}:
 *     get:
 *       summary: Get a students by Id
 *       tags: [students]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Id of a student to retrieve
 *           schema:
 *             type: integer
 *             format: int32   
 *       responses:
 *         "200":
 *           description: student retrieved successfully
 *         "404":
 *           description: Student not found
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Students'
 */
router.get("/:id", controller.getStudentById);


/**
 * @swagger
 *   /api/v1/students/{id}:
 *     put:
 *       summary: Update a student
 *       tags: [students]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *             format: int32
 *           required: true
 *           description: Id of a student to update
 *       requestBody:
 *         description: Updated student information
 *         required: true
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *           required:
 *             - name  
 *       responses:
 *         "200":
 *           description: Student updated successfully
 *         "404":
 *           description: student not found
 */
router.put("/:id", controller.updateStudent);


/**
 * @swagger
 *   /api/v1/students/{id}:
 *     delete:
 *       summary: Delete a student
 *       tags: [students]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *             format: int32
 *           required: true
 *           description: Id of a student to delete    
 *       responses:
 *         "204":
 *           description: Student deleted successfully
 *         "404":
 *           description: student not found
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Students'
 */
router.delete("/:id", controller.removeStudent);

module.exports = router;