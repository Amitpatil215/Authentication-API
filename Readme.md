## Authentication API
A Node.js API Authentication With JWT and mongodb

An authentication method using jwt.Using mongodb as our database, mongoose to create models and to connect to our express server, bcryptjs to hash passwords and jwt to check for private routes.

### Setup
Add `.env` file in the root directory

```
DB_CONNECT_URL="Your mongoDb Url"
TOKEN_SECRET=anythingRandomToGenerateJWT
```