"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
var producto_1 = require("../models/producto");
var getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var listProducts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, producto_1.default.findAll()];
            case 1:
                listProducts = _a.sent();
                res.json(listProducts);
                return [2 /*return*/];
        }
    });
}); };
exports.getProducts = getProducts;
var getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, producto_1.default.findByPk(id)];
            case 1:
                product = _a.sent();
                if (product) {
                    res.json(product);
                }
                else {
                    res.status(404).json({
                        msg: "No existe un producto con el id ".concat(id)
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getProduct = getProduct;
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, producto_1.default.findByPk(id)];
            case 1:
                product = _a.sent();
                if (!!product) return [3 /*break*/, 2];
                res.status(404).json({
                    msg: "No existe un producto con el id ".concat(id)
                });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, product.destroy()];
            case 3:
                _a.sent();
                res.json({
                    msg: 'El producto fue eliminado con exito!'
                });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
var postProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, producto_1.default.create(body)];
            case 2:
                _a.sent();
                res.json({
                    msg: "El producto fue agregado con exito!"
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                res.json({
                    msg: "Upps ocurrio un error, comuniquese con soporte"
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.postProduct = postProduct;
var updateProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, id, product, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, producto_1.default.findByPk(id)];
            case 2:
                product = _a.sent();
                if (!product) return [3 /*break*/, 4];
                return [4 /*yield*/, product.update(body)];
            case 3:
                _a.sent();
                res.json({
                    msg: 'El producto fue actualziado con exito'
                });
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({
                    msg: "No existe un producto con el id ".concat(id)
                });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_2 = _a.sent();
                console.log(error_2);
                res.json({
                    msg: "Upps ocurrio un error, comuniquese con soporte"
                });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.updateProduct = updateProduct;
