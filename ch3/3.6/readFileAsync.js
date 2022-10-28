const fs = require('fs').promises;

(async () => {
  try{
    let data = await fs.readFile('./readme.txt');
    console.log(data);
    console.log(data.toString());
  } catch {
    console.error(err);
  }
})();
