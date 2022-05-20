import userService from "../service/userService";

const handleHelloWord = (req, res) => {
  //   return res.send("hello worlds");
  // goi toi views html
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  // model > get data form database
  let userList = await userService.getUserList();
  await userService.deleteUser(6);

  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  userService.createNewUser(email, password, username);
  // k chay lai trang
  return res.redirect("/user");
};

const handeDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/user");
};

module.exports = {
  handleHelloWord,
  handleUserPage,
  handleCreateNewUser,
  handeDeleteUser,
};
