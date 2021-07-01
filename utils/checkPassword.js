const bcrypt = require("bcrypt");

const checkPassword = function(password, hash) {
    return bcrypt.compareSync(password, hash);
};

module.exports = checkPassword;