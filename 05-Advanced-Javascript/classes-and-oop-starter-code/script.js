//TODO - add your classes below here

class Burger {
    constructor(toppings, protein, containsGluten) {
        this.toppings = toppings;
        this.protein = protein;
        this.containsGluten = containsGluten;
    }

    describe() {
        console.log(this);
    }
}
const toppings = ['lettuce', 'tomato', 'mayo'];
const toppings2 = ['cabbage', 'onion', 'pickles']

const burger1 = new Burger(toppings, 'beef', false);
burger1.describe();

const burger2 = new Burger(toppings2, 'lamb', false);
burger2.describe();


class BurgerWithSide extends Burger {
    constructor(toppings, protein, containsGluten, side) {
        super(toppings, protein, containsGluten);
        this.side = side;
    }

    friesWithThat() {
        let answer = this.side.toLowerCase();
        return answer === 'fries';
    }
}

const burger3 = new BurgerWithSide(toppings, 'lamb', false, 'fries');
console.log(burger3.friesWithThat());
const burger4 = new BurgerWithSide(toppings, 'lamb', false, 'pickles');
console.log(burger4.friesWithThat());