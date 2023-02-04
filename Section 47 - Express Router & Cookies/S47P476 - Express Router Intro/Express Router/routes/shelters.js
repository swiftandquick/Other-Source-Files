// Require express.  
const express = require('express');

// Set up an express router.  
const router = express.Router();

// Use router to set up a route for all shelters.  
router.get('/', (req, res) => {
    res.send("All shelters.");
});

// Use router to set up a route for creating a shelter.  
router.post('/', (req, res) => {
    res.send("Create a shelter.");
});

// Use router to set up a route for one shelter.  
router.get('/:id', (req, res) => {
    res.send("Viewing one shelter.");
});

// Use router to set up a route for editing a shelter.  
router.get('/:id/edit', (req, res) => {
    res.send("Editing the shelter.");
});

// Export the router.  
module.exports = router;