{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    // public 공개
    // private 외부에서 볼수없고 접근 x
    // protected 상속할때 외부에서 접근 x 자식 class 에서만 접근 가능
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        protected coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans:number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            }
        }

    }

    const maker = CoffeeMaker.makeMachine(32);

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num:number) {
            if(num < 0) {
                throw new Error('Error!')
            }
            this.internalAge = num
        }
        constructor(private firstName:string, private lastName:string) {

        }
    }

    const user = new User('Jin', 'JaeYun');
    console.log(user.fullName);
    user.age =6;
    console.log(user);
}