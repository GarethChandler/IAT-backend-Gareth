// Import dependencies for Express and Mongoose.
import express from "express";
import mongoose from "mongoose";

// refactor express to allow params and set port number
const app = express();
const PORT = 3000;

// Establish connection to MongoDB with uri. Set try/catch for error handling.
async function main() {
  const uri =
    "mongodb+srv://glchand05:2SUmEzhsY24TF5bx@iatcluster.jqt04.mongodb.net/IAT_microservices?retryWrites=true&w=majority&appName=IATCluster";
  try {
    await mongoose.connect(uri);
    const db = mongoose.connection.db;
    const dbName = db.databaseName;
    console.log(
      `Connected to MongoDB Atlas using Mongoose! Database Name: ${dbName}`
    );

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
  _id: mongoose.Schema.Types.ObjectId,
  course_id: String,
  courseName: String,
  imageUrl: String,
  description: String,
  timeToComplete: String,
});

// Define mongo model
const Course = mongoose.model("Course", courseSchema);

// Get all courses
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Run server on port.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
