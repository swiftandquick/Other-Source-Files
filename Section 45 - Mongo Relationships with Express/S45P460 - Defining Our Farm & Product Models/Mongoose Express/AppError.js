// Make AppError a subclass of Error, use super() to invoke Error's constructor.  
// Take two arguments in the constructor, and set the AppError object's message and status to the arguments' value.  
class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

// Export the AppError object.  
module.exports = AppError;