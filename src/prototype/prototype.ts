class PaperonyPizza {
   bases: boolean;
   paperony: boolean;
   souse: boolean;
   salami: boolean;

	constructor(bases, paperony, souse, salami) {
		this.bases = bases;
		this.paperony = paperony;
		this.souse = souse;
		this.salami = salami;
	}

	produce() {
		return new PaperonyPizza(this.bases, this.paperony, this.souse, this.salami);
	}
}

const prototypePaperonyPizza = new PaperonyPizza(true, true, true, true);

const pizza1 = prototypePaperonyPizza.produce();
const pizza2 = prototypePaperonyPizza.produce();
const pizza3 = prototypePaperonyPizza.produce();

pizza1.chise = true;
pizza1.tomato = true;

pizza3.salami = false;

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);