const db = require('../db/dbConfig');

const groupController = {

    joinGroup(req, res) {
        db.connect()
            .then(obj => {
                console.log(req.body);
            })
            .catch(err => res.status(404).send(err));
    },

    leaveGroup(req, res) {

        db.connect()
            .then(obj => {
                db.query(`DELETE FROM "Interest" WHERE "user_id" = '${req.body.user}' AND "service_id" = '${req.body.service}'`)
                    .then((resp) => {
                        res.status(200).send(resp);
                    })
                    .catch((err) => res.status(404).send(err));
            })
            .catch(err => res.status(404).send(err));
    }
};

module.exports = groupController;  