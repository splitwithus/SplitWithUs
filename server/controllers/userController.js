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

    //LOGIN
    login(req, res) {
        const user = req.body.username;
        const pw = req.body.password;
        //connect to data base
        db.connect()
            .then(obj => {
                db.query(`SELECT EXISTS (SELECT * FROM login_details WHERE username = ${user} AND password = ${pw})`);
                //
            })
        //verify credentials
    },

    //FORGOT PASSWORD
    forgotPw(req, res) {
        //enter username and email 
        //connect to db
        //db checks if username and email exists
        //message if your account exists an email will be sent
    },

    //FORGOT PASSWORD
    updatePw(req, res) {
        //user clicks link in email
        //update password query
    }
};


module.exports = userController;