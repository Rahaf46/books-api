# Books API

## Project Description
Books API is a simple REST API built with Node.js and Express.js. It allows users to retrieve books, add new books, and filter books by category. It also uses custom middleware to validate incoming data before processing requests.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- JSON
- Thunder Client for API testing

## Main Features
- Retrieve all books.
- Add new books.
- Filter books by category.
- Validate incoming data using custom middleware.
- Return appropriate HTTP status codes and error messages.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Retrieve all books |
| GET | `/api/books?category=Programming` | Filter books by category |
| POST | `/api/books` | Add a new book |

## Data Validation
The project uses custom middleware to validate the `title`, `author`, and `category` fields.

Each field must be a non-empty string. If the submitted data is invalid, the API returns `400 Bad Request` with an error message.

When a book is added successfully, the API returns `201 Created`.

## Data Storage
Books are stored in an in-memory JavaScript array. Therefore, newly added books are not permanently saved and will be lost when the server restarts.

## How to Run the Project
1. Install Node.js.
2. Open the project folder in the terminal.
3. Install the project dependencies:

   npm install
   
4. Start the server:

   node server.js

5. Open the following URL to retrieve all books:

   `http://localhost:3000/api/books`

## Testing
The API was tested using Thunder Client. The tests included:

- Retrieving all books.
- Adding a new book successfully.
- Rejecting invalid input data.
- Verifying that invalid books are not added.
- Filtering books by category.

## What Was Accomplished
- Created a REST API using Express.js.
- Implemented endpoints to retrieve, add, and filter books.
- Created custom middleware for input validation.
- Tested the API endpoints and verified their expected behavior.
