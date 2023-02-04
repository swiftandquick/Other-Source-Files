// Require express.  
const express = require('express');

// Set up an express router.  
const router = express.Router();

// Use router to set up a route for all dogs.  
router.get('/', (req, res) => {
    res.send("All dogs.");
});

// Use router to set up a route for creating a dog.  
router.post('/', (req, res) => {
    res.send("Create a dog.");
});

// Use router to set up a route for one dog.  
router.get('/:id', (req, res) => {
    res.send("Viewing one dog.");
});

// Use router to set up a route for editing a dog.  
router.get('/:id/edit', (req, res) => {
    res.send("Editing the dog.");
});

// Export the router.  
module.exports = router;