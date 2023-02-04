// Require the mongoose package.  
const mongoose = require('mongoose');

// Create a Schema variable, set it equal to the Schema object of mongoose.  
const Schema = mongoose.Schema;

// Connect to the database relationshipDemo.  
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });

// Create a schema for users.  
const userSchema = new Schema({
    username: String,
    age: Number
});

// Create a schema for tweets, with the user object being a reference object.  
const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// Create a model with userSchema.  
const User = mongoose.model('User', userSchema);

// Create a model with tweetSchema.  
const Tweet = mongoose.model('Tweet', tweetSchema);

// makeTweets() create objects and insert them into the tweets collection.  
const makeTweets = async () => {
    // Create a User object.  
    const user = new User({ username: 'chickenfan99', age: 61 });
    // Create a Tweet object without user variable.  
    const tweet1 = new Tweet({ text: 'omg I love my chicken family!', likes: 0 });
    // Set tweet1 object's user value to user, the newly created object within the makeTweet() function.  
    tweet1.user = user;
    // Insert the user object in the users collection.  
    user.save();
    // Insert the tweet1 object in the tweets collection.  
    tweet1.save();
}

// makeTweets();

// Make another Tweet object and reference it to the User object with name of 'chickenfan99'.  
const makeTweets2 = async () => {
    const user = await User.findOne({ username: 'chickenfan99' });
    const tweet2 = new Tweet({ text: 'bock bock bock my chickens make noises', likes: 1239 });
    tweet2.user = user;
    tweet2.save();
}

// makeTweets2();

// Print out the Tweet object, populate the fields of the user property but only print out the username.  
const findTweet = async () => {
    const tweet = await Tweet.find({}).populate('user', 'username');
    console.log(tweet);
}

// findTweet();