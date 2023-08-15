import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastname: "Doe",
    age: 24,
  },
];

//all routes in here are starting with /users
router.get("/", (req, res) => {
  //   console.log(users);
  //   res.send("Hello");
  res.json(users); //send the users array as a JSON response
});

router.post("/", (req, res) => {
  // console.log("POST ROUTE REACHED");
  const user = req.body;
  // console.log(req.body);

  users.push(user);
  res.send(`User with the name ${user.firstName} added to the database`);
  // res.send("POST ROUTE REACHED");
});

export default router;
