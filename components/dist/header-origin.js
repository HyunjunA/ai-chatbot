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
        while (_) try {
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
exports.__esModule = true;
exports.Header = void 0;
var React = require("react");
var link_1 = require("next/link");
var utils_1 = require("@/lib/utils");
var auth_1 = require("@/auth");
var button_1 = require("@/components/ui/button");
var icons_1 = require("@/components/ui/icons");
var user_menu_1 = require("@/components/user-menu");
var sidebar_mobile_1 = require("./sidebar-mobile");
var sidebar_toggle_1 = require("./sidebar-toggle");
var chat_history_1 = require("./chat-history");
function UserOrLogin() {
    return __awaiter(this, void 0, void 0, function () {
        var session;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, auth_1.auth()];
                case 1:
                    session = (_a.sent());
                    return [2 /*return*/, (React.createElement(React.Fragment, null,
                            (session === null || session === void 0 ? void 0 : session.user) ? (React.createElement(React.Fragment, null,
                                React.createElement(sidebar_mobile_1.SidebarMobile, null,
                                    React.createElement(chat_history_1.ChatHistory, { userId: session.user.id })),
                                React.createElement(sidebar_toggle_1.SidebarToggle, null))) : (React.createElement(link_1["default"], { href: "/new", rel: "nofollow" },
                                React.createElement(icons_1.IconNextChat, { className: "size-6 mr-2 dark:hidden", inverted: true }),
                                React.createElement(icons_1.IconNextChat, { className: "hidden size-6 mr-2 dark:block" }))),
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement(icons_1.IconSeparator, { className: "size-6 text-muted-foreground/50" }),
                                (session === null || session === void 0 ? void 0 : session.user) ? (React.createElement(user_menu_1.UserMenu, { user: session.user })) : (React.createElement(button_1.Button, { variant: "link", asChild: true, className: "-ml-2" },
                                    React.createElement(link_1["default"], { href: "/login" }, "Test_Login"))))))];
            }
        });
    });
}
function Header() {
    return (React.createElement("header", { className: "sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl" },
        React.createElement("div", { className: "flex items-center" },
            React.createElement(React.Suspense, { fallback: React.createElement("div", { className: "flex-1 overflow-auto" }) },
                React.createElement(UserOrLogin, null))),
        React.createElement("div", { className: "flex items-center justify-end space-x-2 visible md:invisible" },
            React.createElement("a", { target: "_blank", href: "https://github.com/vercel/nextjs-ai-chatbot/", rel: "noopener noreferrer", className: utils_1.cn(button_1.buttonVariants({ variant: 'outline' })) },
                React.createElement(icons_1.IconGitHub, null),
                React.createElement("span", { className: "hidden ml-2 md:flex" }, "GitHub")),
            React.createElement("a", { href: "https://vercel.com/templates/Next.js/nextjs-ai-chatbot", target: "_blank", className: utils_1.cn(button_1.buttonVariants()) },
                React.createElement(icons_1.IconVercel, { className: "mr-2" }),
                React.createElement("span", { className: "hidden sm:block" }, "Deploy to Vercel"),
                React.createElement("span", { className: "sm:hidden" }, "Deploy")))));
}
exports.Header = Header;
