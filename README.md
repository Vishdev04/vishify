# vishify
A task project from edgistify.

## Requirements

1. You must have [node.js](https://nodejs.org/) installed on your system.
2. You can either install and run [MongoDB](https://www.mongodb.com/) locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as your database on cloud.
3. Clone this repository into your system using:
```bash
git clone https://github.com/Vishdev04/vishify.git
cd vishify
```

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all the dependencies.
Run the below given scripts to install all the dependencies

```bash
npm run install-all
```

This might take a few minutes to complete, depending on your system and network speed

## Server Configurations

Configure some requirements to the server:

1. In the server folder, make a new file named ``` .env ```
2. Copy the contents of ``` .env-template ``` to ``` .env ``` and replace
 Edit the file
 
 ```
 jwtPrivateKey= <Your preffered Key for jswonWebToken>
 db = mongodb://localhost:27017/<dbName> or use MongoDB Atlas connection URL
 ```

## Usage
To run the service 

```javascript
npm run dev
```

