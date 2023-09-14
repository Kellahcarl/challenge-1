const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set ejs view engine
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  console.log("here");
  //res.sendStatus(500);
  //res.status(200).send("hi");
  //res.json({ message: "error" });
  //res.download("server.js");
  res.render("index", { text: "world" });
});

//import router
const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
