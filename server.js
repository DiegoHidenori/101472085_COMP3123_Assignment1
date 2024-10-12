const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const { v4: uuidv4 } = require('uuid'); // For the unique id generation
const userRouter = require('./routes/userRoute'); // Import the user router
const employeeRouter = require('./model/employee');
const errorHandlerMiddleware = require('./errorHandlerMiddleware');
const connectDB = require('./db');  // Import the database connection

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Can send any type of data?

const loggerMiddleware = (req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`);
    next();
};


// Connect to the database
connectDB();


app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', employeeRouter);

app.get('/error', (req, res) => {
    throw new Error('This is a forced error');
    res.send('Error');
});

// // http://localhost:3000/err
// app.get('/err', (req, res) => {
//   try {
//     throw new Error('This is a forced error');
//     res.send('Error');
//   } catch (err) {
//     next(err);
//     res.status(500).send('Error');
//   }
// });

app.use(loggerMiddleware);
app.use(errorHandlerMiddleware);

// User login endpoint
app.post('/api/v1/user/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find(user => user.username === username);
  if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.status(200).json({ message: 'Login successful', user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;