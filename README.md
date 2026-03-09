# My Application Name and description
Overall Description: This site is dedicated to movies and movie lovers. It helps you keep track of the films you’ve already watched and the ones you want to watch in the future. From the main page, you can easily add new movies, edit existing movies, or remove movies from your list. The goal of this site is to provide a simple and convenient way to organize your personal movie collection and watchlist.

 This backend is a MongoDB Database Application. It supports 2 routes (movies and seed). It follows the CRUD model for create, read, update, and delete. The seed route seeds movies and creates indexes for the movie route.

 Linking my backend and frontend repositories here:
 https://github.com/mstanton6/Capstone_Frontend.git - this project
 https://github.com/mstanton6/Capstone_Backend.git  - reference to my backend project

How to Start
============
You start the server by "npm run dev"
You have to have the mongodb connection string: MONGO_URI

See the prerequisites below.


# Example usage
1. This is how to use the movie route

Seed Route:             api/seed

a. Get all movies:      api/movies          GET

b. Get one movie:       api/movies/:id      GET

c. Add a movie          api/movies          POST
{
  "title": "Back to the Future",
  "genre": "Science Fiction / Adventure / Comedy",
  "year": 1985,
  "rating": "PG"
}

d. Edit (Patch) a movie api/movies/:id      PATCH

e. Delete a movie       api/movies/:id      DELETE


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
   2. MongoDB  – The database is already hosted in the cloud. Use the connection string in the .env file - MONGO_URI

# Installation and Usage

To use this project locally:

1.  **Clone the repository:**

    git clone https://github.com/mstanton6/Capstone_Backend.git
    
2.  **Navigate to the project directory:**

    cd Capstone_Backend
    
3.  ** Run dependencies 

    npm install

    npm i cors

    npm i express mongodb dotenv

    npm install express-rate-limit

4. Run "npm run dev"

5.  Open a browser or Postman and go to localhost:3001

# Contributions
- Thank you to the following for making contributions to my project       
1. https://www.google.com/

