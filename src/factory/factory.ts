class Coffemat {
  name: string;
  price: number;
  size: string;

  constructor(name: string, price: number, size: string) {
    this.name = name;
    this.price = price;
    this.size = size;
  }
}

interface CoffematFactory {
  create(): Coffemat;
}

class AmericanoCoffematFactory implements CoffematFactory {
  create() {
    return new Coffemat('americano', 10, 'xl');
  }
}

class EspressoCoffematFactory implements CoffematFactory {
  create() {
    return new Coffemat('espresso', 8, 'xs');
  }
}

class LatteCoffematFactory implements CoffematFactory {
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