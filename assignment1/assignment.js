var Id = 539;
var Name = "Hemanthkumar";
var Bool = true;
var Arr = [1, 2, 3];
console.log("Basic types");
console.log("".concat(Id, "\n").concat(Name, "\n").concat(Bool, "\n").concat(Arr));
var Tuple = ["Hemanth", 539];
console.log(" ");
console.log("Tuple:");
console.log(Tuple);
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
var mysize = Size.medium;
console.log(" ");
console.log("enum:");
console.log(mysize);
function Add(num1, num2) {
    return num1 + num2;
}
var num1 = 1;
var num2 = 2;
console.log("Function: ");
console.log(num1, "+", num2, "=", Add(num1, num2));
function capitalize(str) {
    if (str === void 0) { str = ""; }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("  ");
console.log("capitalize function:");
console.log(capitalize("hemanth"));
var user = {
    name: "Hemanth",
    age: 21,
    email: "20981a0539@raghuenggcollege.in"
};
console.log("  ");
console.log("Interfaces: ");
console.log(user.name);
console.log(user.age);
console.log(user.email);
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.display = function () {
        console.log("year ".concat(this.year));
    };
    return Car;
}());
console.log("  ");
console.log("Class: ");
var car = new Car("car1", "TATA", 2020);
console.log("".concat(car.model));
car.display();
console.log(" ");
console.log("Generics");
