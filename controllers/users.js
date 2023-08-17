import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  //   console.log(users);
  res.send(users);
  // res.json(users); //send the users array as a JSON response
};

export const createUser = (req, res) => {
  let user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to the database`);
};

export const getUser = (req, res) => {
  let { id } = req.params;
  let foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};
export const deleteUser = (req, res) => {
  let { id } = req.params;
  //id to delete 123
  //John 123
  //Jane 321
  users = users.filter((user) => user.id !== id);
  res.send("User with the id ${id} deleted from the database");
};

// export const updateUser = (req, res) => {
//   const { id } = req.params;
//   let { firstName, lastName, age } = req.body;

//   const user = users.find((user) => user.id === id);
//   if (firstName) user.firstName = firstName;

//   if (lastName) user.lastName = lastName;

//   if (age) user.age = age;

//   res.send(`User with the id ${id} has been updated`);
// };

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(` user with the id ${id} has been updated.`);
};
