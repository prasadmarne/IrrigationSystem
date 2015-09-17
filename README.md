1)insert steps:

url: "http://localhost:3000/api/insert"
use http post 
http header: content-type:application/json.
json to send format:
{
    "first_name": "mayur",
    "last_name": "kul",
    "address": "pune",
    "date_of_birth": "1994-01-01",
    "email_id": "m@gmail",
    "phone_no": 142612839
}

2)display

use http get

url:"http://localhost:3000/api/display"

return json conytainig all users;
example:
{
    "Error": false,
    "Message": "Success",
    "users": [
        {
            "id": 1,
            "first_name": "prasad",
            "last_name": "marne",
            "address": "pune",
            "date_of_birth": "1994-06-03T18:30:00.000Z",
            "email_id": "p@gmail.com",
            "phone_no": 9175391908
        },
        {
            "id": 203,
            "first_name": "saurabh",
            "last_name": "pakhare",
            "address": "pune",
            "date_of_birth": "1994-07-06T18:30:00.000Z",
            "email_id": "s@gmail",
            "phone_no": 1426213
        }
    ]
}


3)search:

use http get.

url:"http://localhost:3000/api/search?id=201"

here id= is id to search in database;

return user details;
example:
{
    "Error": false,
    "Message": "Success",
    "users": [
        {
            "id": 201,
            "first_name": "l",
            "last_name": "n",
            "address": "o",
            "date_of_birth": "1993-12-31T18:30:00.000Z",
            "email_id": "k",
            "phone_no": 12244
        }
    ]
}

4)update

use http put

url:"http://localhost:3000/api/update"

json to send to server for updating is:
{
  	"id":3,
    "first_name": "saurabh",
    "last_name": "pakhare",
    "address": "pune",
    "date_of_birth": "1994-07-07",
    "email_id": "s@gmail",
    "phone_no": 1826213
}
here id is the id to be updated.
if u leave a field blank ,blank would be added in the database.
so if u dont want to change a particular field dont add it in json.
it returns
{
    "Error": false,
    "Message": {
        "first_name": "saurabh",
        "last_name": "pakhare",
        "address": "pune",
        "date_of_birth": "1994-07-07",
        "email_id": "s@gmail",
        "phone_no": 1826213
    }
}

5)delete

use http delete.

url:"http://localhost:3000/api/delete?id=3"
it returns
{
    "Error": false,
    "Message": "deleted"
}
