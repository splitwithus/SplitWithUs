// import pgp from 'pg-promise';
const pgp = require('pg-promise')();
// import { user, pw } from '.env';

//db connection details
const cn = 'postgres://hjpjnifc:5kFWGFGkFyUN33Taxih_5soV1CM0mD0M@baasu.db.elephantsql.com:5432/hjpjnifc';

const db = pgp(cn);

module.exports = db;