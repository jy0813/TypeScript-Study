{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?:boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        protected coffeeBeans: number = 0; // instance (object) level

        public constructor(coffeeBeans: number,private sugar:SugarProvider, private milk:MilkFrother) {
            this.coffeeBeans = coffeeBeans;
        }

        fillCoffeeBeans(beans:number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('machine cleaning');
        }

        private grindBeans(shots:number) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up');
        }

        private extract(shots:number): CoffeeCup {
            console.log(`${shots}`);
            return {
                shots,
                hasMilk:false,
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }

    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup) : CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup:CoffeeCup) : CoffeeCup;
    }

    class CheapMilkSteamer implements MilkFrother{
        private steamMilk():void {
            console.log('CheapMilkSteamer');
        }
        makeMilk(cup:CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk:true,
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk():void {
            console.log('CheapMilkSteamer');
        }
        makeMilk(cup:CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk:true,
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother{
        private steamMilk():void {
            console.log('CheapMilkSteamer');
        }
        makeMilk(cup:CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk:true,
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup:CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class AutomaticSugarMixer implements SugarProvider{
        private getSugar() {
            console.log('getSugar');
            return true;
        }
        addSugar(cup:CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,

            }
        }
    }

    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log('getSugar');
            return true;
        }
        addSugar(cup:CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,

            }
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup:CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const noMilk = new NoMilk();

    // Sugar
    const candySugar = new AutomaticSugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    const sweetCandyMachine = new CoffeeMachine(12,candySugar,noMilk);
    const latteMachine = new CoffeeMachine(12,noSugar,cheapMilkMaker);

    // Machine


}