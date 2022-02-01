require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express(); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
app.use(express.json());
const auth = require("./middleware/auth");
const User = require("./model/user");
const List = require("./model/wishlist");

// Add wishlist entry
app.post("/api/list/add", auth, async (req, res) => {
  try {
    const {user_id, username} = req.user;
    const {movieId} = req.body
    const userId = user_id
    
    const oldList = await List.findOne({ userId,  movieId });

    if (oldList) {
      return res.status(409).send("Entry already exists.");
    }
    
    const list = await List.create({
      movieId,
      userId
    });
    
    res.status(201).json(list.movieId)

  } catch (err) {
    console.log(err);
  }
});

// Get wishlist entry for a user
app.get("/api/list", auth, async (req, res) => {
  try {
    const {user_id, username} = req.user;
    const userId = user_id
    
    const list = await List.find({ userId });

    if (!list) {
      return res.status(409).send("No entry exists.");
    }
    
    res.status(200).json(list)

  } catch (err) {
    console.log(err);
  }
});

// Delete wishlist entry
app.delete("/api/list/delete", auth, async (req, res) => {
  try {
    const {user_id, username} = req.user;
    const {movieId} = req.body
    const userId = user_id

    const list = await List.findOneAndDelete({ userId,  movieId });
    
    if (!list) {
      return res.status(409).send("No entry exists.");
    }
    
    res.status(200).json(list)

  } catch (err) {
    console.log(err);
  }
});

// Register
app.post("/api/auth/register", async (req, res) => {

  // Our register logic starts here
  try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      username,
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, username},
      process.env.TOKEN_KEY,
      {
        expiresIn: "6h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json((({ username, token }) => ({ username, token }))(user));
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// Login
app.post("/api/auth/login", async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(201).json((({ username, token }) => ({ username, token }))(user));
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;