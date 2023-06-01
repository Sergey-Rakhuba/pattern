class DrinksMaсhine {
    constructor() {
        this.water = false;
        this.sugae = false;
        this.coffee = false;
        this.tea = false;
    }
}
class CoffeeBuilder {
    constructor() {
        this.orderСustomer = new DrinksMaсhine();
    }
    addMilk(milk) {
        this.orderСustomer.milk = milk;
        return this;
    }
    addArabica(arabica) {
        this.orderСustomer.arabica = arabica;
        return this;
    }
    addCaramelTopping(caramelTopping) {
        this.orderСustomer.caramelTopping = caramelTopping;
        return this;
    }
    updateCoffee(coffee) {
        this.orderСustomer.coffee = rabusta;
        return this;
    }
    build() {
        return this.orderСustomer;
    }
}
class TeaBuilder {
    constructor() {
        this.orderСustomer = new DrinksMaсhine();
    }
    addCurrant(currant) {
        this.orderСustomer.currant = currant;
        return this;
    }
    addLemon(lemon) {
        this.orderСustomer.lemon = lemon;
        return this;
    }
    addGinger(ginger) {
        this.orderСustomer.ginger = ginger;
        return this;
    }
    updateTea(tea) {
        this.orderСustomer.tea = greenTea;
        return this;
    }
    build() {
        return this.orderСustomer;
    }
}
class director {
    constructor(DrinksMaсhine) {
        this.CoffeeBuilder;
        this.TeaBuilder;
    }
}
let myDrinks = newCoffeeBuilder()
    .addMilk = true;
addArabica = true;
addCaramelTopping = true;
console.log(myDrinks);
myDrinks = newTeaBuilder()
    .addLemon = true;
addGinger = true;
addCurrant = true;
console.log(myDrinks);
console.log(latte);
console.log(withSugarAndCream);
//# sourceMappingURL=builder.js.map