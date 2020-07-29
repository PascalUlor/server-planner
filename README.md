**Server Planner Api**
These are solutions to the Backend Developer take home test for Trium Tech
## Getting Started
The Live Application is deployed on heroku at https://trium-server.herokuapp.com/ or can be cloned from github.com.

### Prerequisites

Begin by cloning the repository, `cd` into the cloned repository and run the following:

```
npm install
```
This command installs all the necessary dependencies


### Setup
Create a `.env` using the `.env.example` file as a guide, using your local environment variables

```
npm run dev
```

If all goes well, you should see something similar to this on the console:
```
Application started on http://localhost:<port>
```

### API Architecture
The API is built for easy use and understanding. It includes the following:

1.	Endpoint to input, calculate and return the number of servers based on serverTypes and virtualMachines inputted.


## API END POINTS AND FUNCTIONALITY

| EndPoint | Functionality |
| --- | --- |
| POST `/api/v1/calculate` | return number of *servers* |

Now you can test the endpoints with a client e.g POSTMAN

List of commands available at the moment include:

**POST**

Adds an entry into the database

\
**/api/v1/calculate** - adds a user to the database. The user information is sent within the *Body* of the request and it returns an of object that contains the *HTTP status code* and *result* which is the number of servers. Input format:
```
{
"serverType": {"CPU": 2, "RAM": 32, "HDD": 100},
"virtualMachines": [{"CPU": 1, "RAM": 16, "HDD": 10}, {"CPU": 1, "RAM": 16, "HDD": 10}, {"CPU": 2, "RAM": 32, "HDD": 100}]
}
```
Sample response on *success*
```
{
    "success": true,
    "statusCode": 201,
    "message": "Server count successfully calculated",
    "result": 2
}
```
Each input field is validated and would return a *field specific* error message if empty.
```
{
    "success": false,
    "statusCode": 400,
    "message": "Request Failed",
    "err": {
        "serverType": "serverType must be an object"
    }
}
```


## Integration tests

To test the endpoints, create a test database and run the following:
```
npm run test
```


## Dockerization
To run the Application on docker. Input the following in your terminal
```
chmod +x ./start.sh
```
```
./start.sh
```

If all goes well, you should see something similar to this on the console:
```
Application started on http://localhost:5000
```

## Deployment

API is deployed on [Heroku](https://trium-server.herokuapp.com/)

## Built With

* [Node.js](https://nodejs.org/) - Javascript runtime
* [Express](https://expressjs.com/) - Web application framework
* [Jest](https://jestjs.io/) and Supertest - testing framework

## Authors

* **Ulor Pascal** - [PascalUlor](https://github.com/PascalUlor)
