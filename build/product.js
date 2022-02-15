"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lenovo_1 = __importDefault(require("./lenovo"));
const macbook_1 = __importDefault(require("./macbook"));
let lenovo = new lenovo_1.default("Thinkpad", true, true);
let mb = new macbook_1.default("Pro", true, true);
console.log(lenovo);
console.log(lenovo.type);
console.log(mb);
