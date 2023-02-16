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

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
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
            return this.extract(shots);
        }

    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans:number,public readonly serialNumber:string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('steamMilk');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk:true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(bean:number) {
            super(bean);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar:true,
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(23),
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeeMaker(16),
    ]

    machines.forEach(machine => {
        console.log('-------------------------------');
        machine.makeCoffee(1);
    })


}