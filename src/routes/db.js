import cliente from 'pg';

const { Pool } = cliente ;

const pool = new Pool ({

    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'1234',
    port: 5050

});

export {

    pool

};