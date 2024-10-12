# 101472085_COMP3123_Assignment1

# Steps for creating the assignment database

1. Run:
   - "npm install"
   - "npm install mongoose"
   - "npm install mongodb" // Omit if used npm install mongoose
   - "npm install dotenv" // For storing MongoDB connection string
   - "npm install bcrypt" // For hashing passwords
2. Create the database on MongoDB website
3. create a ".env" file
   - Put this code on ".env" file:
     - MONGODB_URI=mongodb+srv://admin:admin123@comp3123-assignment1.djz5i.mongodb.net/?retryWrites=true&w=majority&appName=comp3123-assignment1
     - Note: Contains the admin username and password
4. Create a separate "db.js" file

   - Insert this code:
     const mongoose = require('mongoose');

     const mongoURI = 'MONGODB_URI=mongodb+srv://admin:admin123@comp3123-assigment1.djz5i.mongodb.net/?retryWrites=true&w=majority&appName=comp3123-assigment1';

     module.exports = async () => {
     try {
     const dbconnect = await mongoose.connect(mongoURI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     })
     console.log(`MongoDB connected: ${dbconnect.connection.host}`);
     }
     catch (error) {
     console.error(`Error: ${error.message}`);
     process.exit(1);
     }
     }
