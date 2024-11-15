const fs = require('fs');

const countJSON = () => {
  const data = fs.readFileSync('estudiantes.json', 'utf8');
  const estudiantes = JSON.parse(data);
  console.log(`Número de estudiantes: ${estudiantes.length}`);
};
module.exports = countJSON;
