const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db-config');

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// const cors = require('cors');
// app.use(cors({
//   origin: 'http://localhost:3000',  // Allow requests only from this URL
//   methods: ['GET', 'POST']         // Allow GET and POST methods
// }));


// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).send(`
    <html>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 20px;">
        <h1 style="color: green;">Server is healthy</h1>
      </body>
    </html>
  `);
});


// Routes
app.get('/api/entries', (req, res) => {
  db.query('SELECT * FROM entries', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/api/entries', (req, res) => {
  const { amount, description } = req.body;
  const query = 'INSERT INTO entries (amount, description) VALUES (?, ?)';
  db.query(query, [amount, description], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId, amount, description });
  });
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port \x1b[32m${PORT}\x1b[0m`);
});
