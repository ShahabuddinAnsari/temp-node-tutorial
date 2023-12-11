const os = require("os");

// Info about the current user
const user = os.userInfo();
console.log(user);

// method return system uptime in seconds
console.log(`System uptime is ${os.uptime} seconds`);
