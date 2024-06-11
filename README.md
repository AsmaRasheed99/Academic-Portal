# Academic-Portal

This is a MERN (MongoDB, Express.js, React.js, Node.js) project [called MindQuest and is designed as an academic portal to allows students and teachers to manage courses where JWT was used for authentication ].

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm (Node Package Manager).
- You have access to a MongoDB instance.
- You have a code editor installed (e.g., Visual Studio Code).

## Getting Started

To get a local copy up and running follow these simple steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AsmaRasheed99/Academic-Portal.git


2. Navigate to the app directory

   ```bash
   cd Academic-Portal
   cd client
   npm install

3. Start your application

   ```bash
   cd client
   npm start

4. Navigate to the server folder

   ```bash
   
   cd Academic-Portal
   cd server
   npm install

5. Start your Server


   ```bash

   cd server
   nodemon index / node index


## Setting up Environment Variables

This project uses environment variables for configuration. Follow these steps to set up your `.env` file:

1. Create a `.env` file in the server folder.

2. Add the following environment variables to your `.env` file:

   ```plaintext
   # MongoDB connection URI
   dbURI=your_mongodb_connection_uri

   # Port for the server (optional)
   PORT=5000

   # Secret keyY for signing the JSON WEB TOKEN (optional)
   SECRETKEY = ex: "cFm@ZUv+ga/:lRU"

## Preview

[Video Preview](https://www.awesomescreenshot.com/video/28547725?key=2e96a49267b3e7b55f11f8af30ae7161)
