var age = 24;
var myValue = {
    field: 98,
};
var myClass = /** @class */ (function () {
    function myClass(field) {
        this.field = field;
    }
    return myClass;
}());
var myObject = new myClass("mate");
var httpResponse = /** @class */ (function () {
    function httpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return httpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "kevu"
    };
};
var myUser = fetchUser();
var res = new httpResponse(myUser, 200, 1);
// console.log(res)
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (items) {
        this.items.push(items);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItem = function () {
        return this.items;
    };
    return CRUD;
}());
var user = [
    { id: 1, name: "calo" },
    { id: 1, name: "caloss" },
    { id: 1, name: "caloss" },
];
var userCrud = new CRUD(user);
userCrud.addItem({ id: 4, name: "proff" });
console.log(userCrud.printItem());
