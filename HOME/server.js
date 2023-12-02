const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose a port number

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// POST endpoint for symptom analysis
app.post('/analyze-symptoms', (req, res) => {
  const symptoms = req.body.symptoms;

  // Replace this with your actual logic for symptom analysis
  // For now, just sending a static response
  const response = {
    solutions: 'Get plenty of rest',
    medicines: 'Over-the-counter pain relievers',
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
