"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize('almacen', 'root', 'El+Incredulo1', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
