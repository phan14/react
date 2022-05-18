const handleHelloWord = (req, res) => {
  //   return res.send("hello worlds");
  // goi toi views html
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  // model > get data form database

  return res.render("user.ejs");
};

module.exports = {
  handleHelloWord,
  handleUserPage,
};
