var Car = /** @class */ (function () {
    function Car() {
        this.cname = "bmw";
        this.cengine = "petrol";
        this.ccolor = "black";
        this.cprice = 200000;
    }
    Car.prototype.showData = function () {
        console.log(this.cname, this.cengine, this.ccolor, this.cprice);
    };
    return Car;
}());
var c = new Car();
c.showData();
