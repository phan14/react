import bcrypt from "bcryptjs";
// get the client
import mysql from "mysql2";

const salt = bcrypt.genSaltSync(10);

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = (email, password, username) => {
  let hashPass = hashUserPassword(password);

  // simple query
  connection.query(
    " INSERT INTO users (email, password, username) VALUES (?,?,?)",
    [email, hashPass, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
};

const getUserList = () => {
  let user = [];
  // simple query
  connection.query(" SELECT * from users ", function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log("ckeck results ", results);
  });
};

module.exports = {
  createNewUser,
  getUserList,
};
