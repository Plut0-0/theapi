const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware (allow all origins and methods)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(express.json());

// Root route returns JSON
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Student API' });
    const students = [
    { id: 1, name: 'Pluto', major: 'CS' },
    { id: 2, name: 'Mars', major: 'Physics' }
  ];
  res.json(students);
});

app.get('/students', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
