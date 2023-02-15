{
  // Javascript
  // function jsAdd(num1,num2) {
  //   return num1 + num2;
  // }
  // function jsFetchNum(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }
  //
  // // TypeScript
  // function tsAdd(num1:number, num2:number):number {
  //   return num1 + num2;
  // }
  // function tsFetchNum(id:string):Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }

  // JavaScript => TypeScript
  // Optional parameter;
  function printName(firstName:string,lastName?:string) {
    console.log(firstName);
    console.log(lastName)
  }
  printName('Jin','JaeYun');
  printName('Jin');
  printName('Jin', undefined);

  // Default prameter
  function printMessage(message:string = 'default mesage') {
    console.log(message)
  }
  printMessage()

  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a,b) => a+b);
  }

  console.log(addNumbers(1,2));
  console.log(addNumbers(1,2,3,4,5,6));
}