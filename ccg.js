class Card{
    constructor(name, cost){
        this.name = name;
        this.cost =cost;
    }
    parentFunction(){
        return "This is coming from the parent."
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    childFunction() {
        const message = super.parentFunction();
        console.log(message);
    }
    attack(unitCard){
        console.log (`
        ${this.name} attacks ${unitCard.name}
        `)
        
    }
    
}

class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    childFunction() {
        const message = super.parentFunction();
        console.log(message);
    }
    play(unitCard){
        console.log (`
        ${this.name} effects ${unitCard.name}
        `)
        // if (this.stat == "resilience"){
        //     unitCard.res += this.mag}
        // else if (this.stat == "power"){
        //     unitCard.power += this.mag}
        this.stat == "resilience"? unitCard.res += this.mag : unitCard.power += this.mag
    }
}   

// const unitCard1 = new Unit("Red Belt Ninja", cost=3, power=3, res=4);
// const unitCard2 = new Unit("Black Belt Ninja", cost=4, power=5, res=4);
// const effectCard1 = new Effect("Hard  Algorithm", cost=2, text = "increase target's resilience by 3", stat = resilience, mag= +3);
// const effectCard2 = new Effect("Unhandled Promise Rejection", cost=1, text="reduce target's resilience by 2", stat=resilience, mag= -2);
// const effectCard3 = new Effect("Pair Programming", cost=3, text="increase target's power by 2", stat=power, mag= +2);

// unitCard.attack();
// unitCard.childFunction();
// effectCard.play();
// effectCard.childFunction();


const effectCard1 = new Effect("Hard  Algorithm", cost=2, text = "increase target's resilience by 3", stat = "resilience", mag= +3);
const effectCard2 = new Effect("Unhandled Promise Rejection", cost=1, text="reduce target's resilience by 2", stat="resilience", mag= -2);
const effectCard3 = new Effect("Pair Programming", cost=3, text="increase target's power by 2", stat="power", mag= +2);


//turn 1
const unitCard1 = new Unit ("Red Belt Ninja", cost=3, power=3, res=4);
console.log(unitCard1.res)

effectCard1.play(unitCard1)

//turn 2
const unitCard2 = new Unit ("Black Belt Ninja", cost=4, power=5, res=4);
console.log("hello", unitCard1.res)

effectCard2.play(unitCard1)
console.log("logging one", unitCard1.res)

//turn 3
console.log("unit cart 1 res is: ", unitCard1.res)
console.log("unit card 2 res is: ", unitCard2.res)

effectCard3.play(unitCard1)
console.log(unitCard1.res, unitCard1.power)
unitCard1.attack(unitCard2)

console.log(unitCard1)
console.log(unitCard2)



