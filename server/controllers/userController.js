const db = require('../db/dbConfig');

const userController = {

  //ADD NEW USERS
  addUser(req, res) {

    let addUser = `INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`

    db.connect()
      .then(obj => {
        // db.query(`INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`)
        db.query(addUser)
          .then((resp) => {
            console.log('user created')
            res.status(200).send(resp);
          })
          .catch((err) => res.status(404).send(err));
      })
      .catch(err => {
        console.log('error connecting')
        res.status(404).send(err);
      });
  },

  //GET ALL USERS
  allUsers(req, res) {
    db.connect()
      .then(obj => {
        console.log('db connected');
        db.query('SELECT * FROM "Users"')
          .then((resp) => {
            console.log(resp);
            res.status(200).send(resp);
          })
          .catch((err) => res.status(404).send(err));
      })
      .catch(error => {
        console.log('error connecting')
        res.status(404).send(error);
      });
  },

  //LOGIN/LOGOUT 
  login(req, res) {
    //connect to db
    //verify credentials
  },
  logout(req, res) {
    console.log('logging out');
    req.logout();
    res.redirect('/');
  },

  forgotpw(req, res) {
    //connect to db
    //verify credentials
  }

};


module.exports = userController;