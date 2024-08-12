// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit process with failure code
    }
    console.log('Connected to MySQL');
});

// Route to get banner settings
app.get('/api/banner', (req, res) => {
    db.query('SELECT * FROM banner_db LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error fetching banner settings:', err);
            res.status(500).json({ error: 'Failed to fetch banner settings' });
        } else {
            res.json(result[0] || {});
        }
    });
});

// Route to update banner settings
app.post('/api/banner', (req, res) => {
    const { description, duration, link, showBanner } = req.body;
    const updateQuery = `
        UPDATE banner_db
        SET description = ?, duration = ?, link = ?, showBanner = ?
        WHERE id = 1
    `;

    db.query(updateQuery, [description, duration, link, showBanner], (err) => {
        if (err) {
            console.error('Error updating banner settings:', err);
            res.status(500).json({ error: 'Failed to update banner settings' });
        } else {
            res.json({ message: 'Banner settings updated successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


