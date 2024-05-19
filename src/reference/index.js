"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __importDefault(require("../global"));
var color = global_1.default.color;
var reference = {
    light: {
        entriBlue: {
            default: color.primary.blue[500],
            onBlue: color.neutrals.pureWhite,
            blueContainer: color.primary.blue[50],
            onBlueContainer: color.primary.blue[800],
            blueHover: color.primary.blue[300],
        },
    },
    dark: {
        entriBlue: {
            default: color.primary.blue[400],
            onBlue: color.primary.blue[900],
            blueContainer: color.primary.blue[900],
            onBlueContainer: color.primary.blue[100],
            blueHover: color.primary.blue[300],
        },
    },
};
exports.default = reference;
