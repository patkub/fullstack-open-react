# 003-phonebook-backend

Example output:

```
$ npm start

> 003-phonebook-backend@1.0.0 start
> node index.js

Server running on port 3001
GET /api/persons 200 231 2.007 ms {}
GET /api/persons/2 200 57 0.559 ms {}
DELETE /api/persons/2 204 - 0.350 ms {}
POST /api/persons 200 51 0.237 ms {"name":"Alice","number":"1-123-456-7890"}
GET /api/notfound 404 28 0.400 ms {}
```
