// get the client
import { validateUseBuiltInsOption } from "@babel/preset-env/lib/normalize-options";
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const handleHelloWord = (req, res) => {
  //   return res.send("hello worlds");
  // goi toi views html
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  // model > get data form database

  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // simple query
  connection.query(
    " INSERT INTO users (email, password, username) VALUES (?,?,?)",
    [email, password, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
  return res.send("handleCreateNewUser");
};

module.exports = {
  handleHelloWord,
  handleUserPage,
  handleCreateNewUser,
};
