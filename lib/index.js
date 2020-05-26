"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JamLoginButton = void 0;
const react_1 = __importDefault(require("react"));
exports.JamLoginButton = (_a) => {
    var { appId, redirectUrl } = _a, props = __rest(_a, ["appId", "redirectUrl"]);
    return react_1.default.createElement("a", Object.assign({}, props, { href: `https://core.justauth.me/auth?app_id=${appId}&redirect_url=${redirectUrl}` }),
        react_1.default.createElement("img", { src: "https://static.justauth.me/medias/button.png", alt: "Se connectecter avec JustAuthMe" }));
};
//# sourceMappingURL=index.js.map