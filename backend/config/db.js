const Pool = require('pg').Pool;
const pool = new Pool({
    user:'cecile',
    password:'aPres,pRèj',
    database:'restaurangular',
    host:'localhost',
    port : 5432
});

pool.connect()
    .then(()=>console.log("connexion à la base de donnée réussie"))
    .catch((error => console.error(error)))

module.exports = pool;