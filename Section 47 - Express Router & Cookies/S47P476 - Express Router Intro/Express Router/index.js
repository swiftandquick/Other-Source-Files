// Require express.  
const express = require('express');
const app = express();

// Require the variable router from from shelter.js.  
const shelterRoutes = require('./routes/shelters');

// Require the variable router from dogs.js.  
const dogRoutes = require('./routes/dogs');

// Require the variable router from admin.js.  
const adminRoutes = require('./routes/admin');

// Now I can set up the routes from shelters.js connect to localhost:3000/shelters.  
// If I go to localhost:3000/shelters/:id, I will go to the page that shows a specified route.  
app.use('/shelters', shelterRoutes);

// Now I can set up the routes from dogs.js connect to localhost:3000/dogs.  
app.use('/dogs', dogRoutes);

// Now I can set up the routes from admin.js connect to localhost:3000/admin.  
app.use('/admin', adminRoutes);

// Listen on port 3000.  
app.listen(3000, () => {
    console.log("Listening on port 3000.");
});