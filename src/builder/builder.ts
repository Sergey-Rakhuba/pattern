class DrinksMaсhine {
   water: boolean;
   sugae: boolean;
   coffee: boolean;
   tea: boolean;  

	   constructor() {
   		this.water = false;
   		this.sugae = false;
         this.coffee = false;
         this.tea = false;
      
	}
}

class CoffeeBuilder {
   milk: boolean;
   arabica: boolean;
   caramelTopping: boolean;
   currant: boolean;
   lemon: boolean;
   ginger: boolean;
   rabusta: boolean;
   orderСustomer: any;
   
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
   orderСustomer: any;
   milk: boolean;
   arabica: boolean;
   caramelTopping: boolean;
   currant: boolean;
   lemon: boolean;
   ginger: boolean;
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
   CoffeeBuilder: any;
   TeaBuilder: any;
   constructor(DrinksMaсhine) {
      this.CoffeeBuilder
      this.TeaBuilder
   }

}

let myDrinks = newCoffeeBuilder()
   .addMilk = true;
   .addArabica = true;
   .addCaramelTopping = true;

console.log(myDrinks);

myDrinks = newTeaBuilder()
   .addLemon = true;
   .addGinger = true;
   .addCurrant = true;

console.log(myDrinks);



console.log(latte);
console.log(withSugarAndCream);