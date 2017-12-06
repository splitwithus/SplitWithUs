const db = require('../db/dbConfig');

const serviceController = {

    allServices(req, res) {
        db.connect()
            .then(obj => {
                db.query('SELECT * FROM "Services"')
                    .then((resp) => {
                        res.status(200).send(resp);
                    })
                    .catch((err) => res.status(404).send(err));
            })
            .catch(err => {
                console.log('error connecting')
                res.status(404).send(err)
            });
    }

};


module.exports = serviceController;