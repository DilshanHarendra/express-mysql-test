module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.BOOLEAN
        }
    });

    return users;
};
