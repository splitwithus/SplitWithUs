const db = require('../db/dbConfig');

const addUserQuery = (newUser) => {
    return `INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`
}

const userController = {

    addUser(req, res) {
        db.connect()
            .then(obj => {
                db.query(`INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`)
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

    allUsers(req, res) {
        db.connect()
            .then(obj => {
                db.query('SELECT * FROM "Users"')
                    .then((resp) => {
                        res.status(200).send(resp);
                    })
                    .catch((err) => res.status(404).send(err));
            })
            .catch(error => {
                console.log('error connecting')
                res.status(404).send(error);
            });
    },

    login(req, res) {
        //connect to db
        //verify credentials
    },

    forgotpw(req, res) {
        //connect to db
        //verify credentials
    }

};


module.exports = userController;