// import pgp from 'pg-promise';
const pgp = require('pg-promise')();
// import { user, pw } from '.env';

//db connection details
const cn = 'postgres://jagtbsfl:_RHivRq2crKo9iQAFDfPlyEHo8uvDv-m@horton.elephantsql.com:5432/jagtbsfl';

const db = pgp(cn);

module.exports = db;