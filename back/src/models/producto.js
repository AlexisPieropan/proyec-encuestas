"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = require("../db/connection");
var Producto = connection_1.default.define('Producto', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Producto;
