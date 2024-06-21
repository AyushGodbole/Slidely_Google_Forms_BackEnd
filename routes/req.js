"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
// Path to db.json
const dbPath = path.join(__dirname, '../db.json');
// Helper function to read data from db.json
const readDataFromFile = () => {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    }
    catch (error) {
        console.error('Error reading db.json:', error);
        throw new Error('Internal Server Error');
    }
};
// Helper function to write data to db.json
const writeDataToFile = (data) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    }
    catch (error) {
        console.error('Error writing db.json:', error);
        throw new Error('Internal Server Error');
    }
};
/* GET details */
router.get('/details', (req, res) => {
    if (!fs.existsSync(dbPath)) {
        console.error('db.json not found');
        return res.status(404).json({ error: 'Database not found' });
    }
    try {
        const data = readDataFromFile();
        res.json(data);
    }
    catch (error) {
        console.error('Error reading db.json:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
/* POST /api/submit */
router.post('/submit', (req, res) => {
    try {
        const { id, name, email, phone, githubLink, stopwatchTime } = req.body;
        const newData = { id, name, email, phone, githubLink, stopwatchTime };
        if (!fs.existsSync(dbPath)) {
            fs.writeFileSync(dbPath, JSON.stringify([], null, 2));
        }
        const data = readDataFromFile();
        data.push(newData);
        writeDataToFile(data);
        res.status(200).json({ message: 'Data saved successfully' });
    }
    catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
});
/* PUT /api/edit/:id */
router.put('/edit/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, githubLink, stopwatchTime } = req.body;
        if (!fs.existsSync(dbPath)) {
            return res.status(404).json({ error: 'Database not found' });
        }
        const data = readDataFromFile();
        const index = data.findIndex(item => item.id === id);
        if (index === -1) {
            return res.status(404).json({ error: 'Data not found' });
        }
        data[index] = Object.assign(Object.assign({}, data[index]), { name,
            email,
            phone,
            githubLink,
            stopwatchTime });
        writeDataToFile(data);
        res.status(200).json({ message: 'Data updated successfully' });
    }
    catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Failed to update data' });
    }
});
/* DELETE /api/delete/:id */
router.delete('/delete/:id', (req, res) => {
    try {
        const { id } = req.params;
        if (!fs.existsSync(dbPath)) {
            return res.status(404).json({ error: 'Database not found' });
        }
        const data = readDataFromFile();
        const index = data.findIndex(item => item.id === id);
        if (index === -1) {
            return res.status(404).json({ error: 'Data not found' });
        }
        data.splice(index, 1);
        writeDataToFile(data);
        res.status(200).json({ message: 'Data deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ error: 'Failed to delete data' });
    }
});
exports.default = router;
//# sourceMappingURL=req.js.map