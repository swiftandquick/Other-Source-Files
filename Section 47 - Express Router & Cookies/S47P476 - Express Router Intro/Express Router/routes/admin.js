// Require express.  
const express = require('express');

// Set up an express router.  
const router = express.Router();

// For all routes in admin.js, if the query isAdmin is not set to true, display "Sorry not an admin!".   
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("Sorry not an admin!");
});

router.get('/topsecret', (req, res) => {
    res.send('This is top secret!');
});

router.get('/deleteeverything', (req, res) => {
    res.send('OK, deleted it all!');
});

// Export the router.  
module.exports = router;