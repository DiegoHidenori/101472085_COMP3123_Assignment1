const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// A simple route
app.get('/', (req, res) => {
  res.send('Hello World from Express and Docker askjdfhaosdhf!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;