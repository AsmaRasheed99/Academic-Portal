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
   cd client
   npm install
   npm start
   cd server
   npm install
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
