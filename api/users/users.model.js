const { DataTypes } = require("sequelize");

module.exports = function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false },
        userType: { type: DataTypes.STRING, defaultValue: "user" },
    };

    const options = {
        defaultScope: {
            attributes: { exclude: ["hash"] },
        },
        scopes: {
            withHash: { attributes: {} },
        },
    };

    return sequelize.define("user", attributes, options);
};
