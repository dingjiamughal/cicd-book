const mysql = require('mysql2/promise');
const { sqlConfig } = require('../config/dev');

async function start() {
  const connection = await mysql.createConnection(sqlConfig);
  const [rows] = await connection.execute('select now();');

  return rows;
}
module.exports = start;

// (async () => {
//   const rows = await start();
//   console.log(rows);
// })();
