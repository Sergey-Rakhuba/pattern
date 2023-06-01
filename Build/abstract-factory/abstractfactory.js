function ProducerFactory(coffee) {
    return automat === 'coffee' ? coffematFactory : JucematFactory;
}
function coffematFactory() {
    return new Coffemat();
}
function JucematFactory() {
    return new Jucemat();
}
class Coffemat {
    constructor(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
}
class Jucemat {
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
class OrangeJucematFactory {
    create() {
        return new Jucemat('orange', 30, 'xl');
    }
}
class AppleJucematFactory {
    create() {
        return new Jucemat('apple', 28, 'xs');
    }
}
class LemonJucematFactory {
    create() {
        return new Jucemat('lemon', 55, 'xx');
    }
}
const orangeJucematFactory = new OrangeJucematFactory();
const appleJucematFactory = new AppleJucematFactory();
const lemonJucematFactory = new LemonJucematFactory();
const orangeJucemat = orangeJucematFactory.create();
const appleJucemat = appleJucematFactory.create();
const lemonJucemat = lemonJucematFactory.create();
console.log(orangeJucemat);
console.log(appleJucemat);
console.log(lemonJucemat);
//# sourceMappingURL=abstractfactory.js.map