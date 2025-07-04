import { Sequelize, DataTypes } from "sequelize";
import { sequelizeMethod } from "../config/dbConfig.js";

export const User = sequelizeMethod.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'userTable',
    timestamps: false
});
