// Import dependencies for Express and Mongoose.
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Initialise express to allow params and set port number
const app = express();
const PORT = 3000;

// Middleware to parse json body
app.use(express.json());
app.use(cors());

// Establish connection to MongoDB with uri. Set try/catch for error handling.
async function main() {
  // You must add connection string to .env to use mongodb. This is not synced to github
  const uri = process.env.DATABASE_URI;

  // /connect to MongoDB
  try {
    await mongoose.connect(uri);
    const db = mongoose.connection.db;
    const dbName = db.databaseName;
    console.log(
      `Connected to MongoDB Atlas using Mongoose! Database Name: ${dbName}`
    );

    // Print the collections names to console
    const collections = await db.listCollections().toArray();
    console.log(
      `Database Info: ${dbName} has ${collections.length} collections`
    );
    console.log("Collections");
    collections.forEach((collection) => {
      console.log(collection.name);
    });
  } catch (e) {
    console.error(e);
  }
}
main().catch(console.error);

// Define MongoDB schema
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  descriptionShort: { type: String, required: true },
  descriptionLong: { type: String, required: true },
  timeToComplete: { type: String, required: true },
  instructor: { type: String, required: true },
  category: { type: String, required: true },
});

// Define mongoDB model
const Course = mongoose.model("Course", courseSchema);

/**
 * Get all courses.
 *
 * @name GET /courses
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} The array of courses.
 */
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Get course by Id.
 *
 * @name GET /courses/:id
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} The array of course.
 */
app.get("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course == null) {
      return res.status(404).json({ message: "Cannot find course" });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Create a new course.
 *
 * @name POST /courses
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The newly created course with a 201 status code.
 */
app.post("/courses", async (req, res) => {
  try {
    const newCourse = new Course({
      // Get info from course body
      courseName: req.body.courseName,
      imageUrl: req.body.imageUrl,
      descriptionShort: req.body.descriptionShort,
      descriptionLong: req.body.descriptionLong,
      timeToComplete: req.body.timeToComplete,
      instructor: req.body.instructor,
      category: req.body.category,
    });
    const savedCourse = await newCourse.save(); // Add the new course to the database
    res.status(201).json(savedCourse); // Return the new course with a 201
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Run server on port.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
