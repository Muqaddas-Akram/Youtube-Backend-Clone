//For handling Api Errors

class ApiError extends Error {  // Custom error class 'ApiError' extending the built-in 'Error' class
    constructor(
        statusCode, 
        // 'statusCode' is the HTTP status code for the error

        message = "Something went wrong", 
        // Default error message if none is provided

        errors = [], 
        // 'errors' is an array to hold multiple error messages/details, defaulting to an empty array

        stack = "" 
        // 'stack' is for the error stack trace, with an empty string as the default
    ) { 
        super(message); 
        // Calls the parent 'Error' class constructor with the 'message' parameter

        this.statusCode = statusCode; 
        // Sets the HTTP status code on the ApiError instance

        this.data = null; 
        // Initializes 'data' property to null, can be used for additional error data later

        this.message = message; 
        // Sets the custom error message on the ApiError instance

        this.success = false; 
        // Indicates the success status, set to false by default since this represents an error

        this.errors = errors; 
        // Stores additional error details or messages

        if (stack) { 
            // Checks if a custom stack trace was provided
            this.stack = stack; 
            // If a stack trace is provided, set it on the instance
        } else { 
            // If no custom stack trace is provided
            Error.captureStackTrace(this, this.constructor); 
            // Captures the current stack trace and assigns it to the instance
        }
    }
}

export { ApiError }; 
// Exports the ApiError class for use in other modules
