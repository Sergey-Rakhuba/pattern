class Coffemat {
    constructor(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
}
class AmericanoCoffematFactory {
    create() {
        return new Coffemat('americano', 10, 'xl');
    }
}
class EspressoCoffematFactory {
    create() {
        return new Coffemat('espresso', 8, 'xs');
    }
}
class LatteCoffematFactory {
    create() {
        return new Coffemat('latte', 25, 'xx');
    }
}
const americanoFactory = new AmericanoCoffematFactory();
const espressoFactory = new EspressoCoffematFactory();
const latteFactory = new LatteCoffematFactory();
const americanoCoffemat = americanoFactory.create();
const espressoCoffemat = espressoFactory.create();
const latteCoffemat = latteFactory.create();
console.log(americanoCoffemat);
console.log(espressoCoffemat);
console.log(latteCoffemat);
//# sourceMappingURL=factory.js.map