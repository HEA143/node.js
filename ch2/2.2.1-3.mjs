import axios from 'axios'; // yarn add axios

setImmediate(async () => {
  try {
    const result =  await axios.get('https://www.zerocho.com/api/get');
    console.log(result);
    console.log(result.data); // {}
  } catch (error) {
    console.error(error);
  }
});
