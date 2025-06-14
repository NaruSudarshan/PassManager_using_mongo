// Import required modules
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

// App and configuration
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB setup
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
const dbName = 'passManager';

// Routes

// Route to display all passwords
app.get('/', async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    // Fetch all password documents
    const passwords = await collection.find({}).toArray();
    res.json(passwords);
});

// Route to save a new password
app.post('/add', async (req, res) => {
    const { site, username, password } = req.body;
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    // Insert new password document
    const result = await collection.insertOne({ site, username, password });
    res.json({ message: 'Password added successfully', id: result.insertedId });
});

// Route to delete a password by ID
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    // Delete password document by ObjectId
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1) {
        res.json({ message: 'Password deleted successfully' });
    } else {
        res.status(404).json({ message: 'Password not found' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Example app listening on port "http://localhost:${port}"`);
});
