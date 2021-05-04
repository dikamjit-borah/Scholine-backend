const bcrypt = require('bcryptjs');


const test=async() => {
const hashedPassword = await bcrypt.hash("manasvalleyadmin123", 10);
console.log(hashedPassword);

}
test()