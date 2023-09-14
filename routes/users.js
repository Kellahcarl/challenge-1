//import express
const express = require("express"); //create an instance of the express server.

const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("users list");
});

router.get("/new", (req, res) => {
  res.render("users/new", { name: "test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.name });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { name: req.body.name });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    //console.log(req.user);
    res.send(`get User with Id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update User with Id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete User with Id ${req.params.id}`);
  });

const users = [{ name: " Kyle " }, { name: "Sally" }];

router.param("id", (req, res, next, id) => {
  //   console.log(id);
  req.user = users[id];

  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
//export router
module.exports = router;
//create request to get individual user using id dynamically
// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send(`get User with Id ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   req.params.id;
//   res.send(`update User with Id ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   req.params.id;
//   res.send(`delete User with Id ${req.params.id}`);
// });
