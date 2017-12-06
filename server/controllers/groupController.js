const db = require('../db/dbConfig');

const groupController = {

    //JOIN A GROUP
    joinGroup(req, res) {
        console.log(req.body);
        db.connect()
            .then(obj => {
                db.query(`INSERT INTO "Interest" ("user_id", "service_id") VALUES ('${req.body.user_id}', '${req.body.service_id}')`)
                .then((resp) => res.status(200).send(resp));
            })
            .catch(err => res.status(404).send(err));
    },

    //LEAVE A GROUP
    leaveGroup(req, res) {
        db.connect()
            .then(obj => {
                // db.query(`DELETE FROM "Interest" WHERE "user_id" = '${req.body.user}' AND "service_id" = '${req.body.service}'`)
                //     .then((resp) => {
                //         res.status(200).send(resp);
                //     })
                //     .catch((err) => res.status(404).send(err));
                res.status(200).send('Connected to DB');
            })
            .catch(err => res.status(404).send(err));
    }
};

module.exports = groupController;  