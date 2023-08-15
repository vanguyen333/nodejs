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

router.post("/", (req, res) => {});

export default router;
