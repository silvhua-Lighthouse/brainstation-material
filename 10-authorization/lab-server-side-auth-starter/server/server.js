import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import jwt from "jsonwebtoken";
import cors from "cors";
import "dotenv/config";

app.use(express.json());
app.use(cors());

function authorize(req, res, next) {
  // STEP 2: Logic for getting the token and
  // decoding the contents of the token. The
  // decoded contents should be placed on req.decoded
  // If the token is not provided, or invalid, then
  // this function should not continue on to the
  // end-point and respond with an error status code.
  const { authorization } = req.headers;
  const token = authorization.split(' ')[1];
  try {
    const payload = jwt.verify(token, secretKey);
    req.decoded = payload;
    console.log(payload);
    next();
  } catch (error) {
    console.log(`Token verification failed: ${error}`);

    res.status(401).send(`Authorization failed`);
  }
}

const users = {};
const secretKey = process.env.SECRET_KEY;

// Some Basic Sign Up Logic. Take a username, name,
// and password and add it to an object using the
// provided username as the key
app.post("/signup", (req, res) => {
  const { username, name, password } = req.body;
  users[username] = {
    name,
    password, // NOTE: Passwords should NEVER be stored in the clear like this. Use a
    // library like bcrypt to Hash the password. For demo purposes only.
  };
  res.json({ success: "true" });
});

// A Basic Login end point
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    // STEP 1: When a user provides a correct username/password,
    // the user can be considered authenticated.
    // Create a JWT token for the user, and add their name to
    // the token. Send the token back to the client.
    let token = jwt.sign(
      { username: username },
      secretKey
    );
    res.json({ token: token });
  } else {
    // If there's an error, send that back to the client
    // with a 401 status code.
    res.status(401).send('Password does not match')
  }
});

// A Profile end-point that will return user information,
// in this example, the user's name that they provided
// when they signed up.
// The authorize middleware function must check for
// a token, verify that the token is valid, decode
// the token and put the decoded data onto req.decoded
app.get("/profile", authorize, (req, res) => {
  console.log('attempting to get profile')
  res.json(req.decoded);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
