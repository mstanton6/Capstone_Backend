# My Application Name and description
 This is a MongoDB Database Application. It supports 2 routes (movies and seed). It follows the CRUD model for create, read, update, and delete. The seed route seeds movies and creates indexes for the movie route.

How to Start
============
You start the server by "npm run dev"

See the prerequisites below.


# Example usage
1. This is how to use the movie route

a. Get all movies:   api/movies

b. Get one movie:    api/movies/:id

c. Add a movie        api/movies
{
  "title": "Back to the Future",
  "genre": "Science Fiction / Adventure / Comedy",
  "year": 1985,
  "rating": "PG"
}

d. Edit (Patch) a movie api/movies/:id

e. Delete a movie       api/movies/:id


# Technologies Used:

Node.js                 – Runs JavaScript on the server.

Express.js              – Handles routes and HTTP requests.

MongoDB                 – Stores data in a document-based database.

JavaScript              – The language that was used to build this project.

REST API                – Uses standard HTTP methods (GET, POST, PATCH, DELETE)

# link to my gitGitHub account: https://github.com/mstanton6/Capstone_Backend.git


# Getting Started on setting on the project

# Prerequisites

   1. node.js
   2. MongoDB Atlas connection – The database is already hosted in the cloud. Use the connection string in the .env file.

# Installation and Usage

To use this project locally:

1.  **Clone the repository:**

    git clone https://github.com/mstanton6/Capstone_Backend.git
    
2.  **Navigate to the project directory:**

    cd Capstone_Backend
    
3.  ** Run dependencies 

    npm install

    npm i express mongodb dotenv

4. Run "npm run dev"

5.  Open a browser or Postman and go to localhost:3001

# Contributions
- Thank you to the following for making contributions to my project       
1. https://www.google.com/

