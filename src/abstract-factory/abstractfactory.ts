function ProducerFactory(coffee: any) {
  return automat === 'coffee' ? coffematFactory : JucematFactory;
}


function coffematFactory() {
	return new Coffemat();
}

function JucematFactory(): Jucemat {
	return new Jucemat();
}


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
class Jucemat {
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




class OrangeJucematFactory implements JucematFactory {
  create() {
    return new Jucemat('orange', 30, 'xl');
  }
}

class AppleJucematFactory implements JucematFactory {
  create() {
    return new Jucemat('apple', 28, 'xs');
  }
}

class LemonJucematFactory implements JucematFactory {
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