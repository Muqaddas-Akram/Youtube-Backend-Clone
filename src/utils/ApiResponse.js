//For API'S response
class ApiResponse {                  // Class 'ApiResponse' for handling API responses in a standardized way
    constructor(statusCode, data, message = "Success") {  // Constructor takes 'statusCode', 'data', and an optional 'message' with a default value of "Success"
        this.statusCode = statusCode;  // Sets the HTTP status code on the ApiResponse instance
        this.data = data; // Stores the response data, which could be any type (e.g., object, array, etc.)
        this.message = message; // Sets the response message, with a default of "Success"
         this.success = statusCode < 400; // Sets the 'success' property to true if the status code indicates success (<400), otherwise false
    }
}

export { ApiResponse }; 

