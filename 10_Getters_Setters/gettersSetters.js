"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this._courseCount = 1;
        // #name: string; // javascript way of defining private
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(User.prototype, "userEmail", {
        get: function () {
            return "user email is ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (num) {
            if (this._courseCount <= 1) {
                throw new ErrorEvent("Course count should be more then 1");
            }
            this._courseCount = num;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(User));
var user = new User("k@k.com", "kuldeep");
console.log(user.courseCount);
user.courseCount = 2;
console.log(user.courseCount);
var subUser = new SubUser("k1@k.com", "kuldeep1");
console.log(subUser.name);
// use tsc -t es5 10_Getters_Setters/gettersSetters.ts
