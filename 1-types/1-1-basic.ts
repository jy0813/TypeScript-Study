{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */

  //number
  const num:number = 1;

  //string
  const str:string = 'hello';

  //boolean
  const boal:boolean = true;

  // undefined
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return 1;
  }

  // null
  let person: string | null;
  person = 'person';

  //unknown 알수없는 타입, 어떤 데이터든 담을수있음. 가능하면 사용 x
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any 어떤것이든 담을수 있는 타입. 가능하면 사용 x
  let anything: any = 0;
  anything = 'hi';
  anything = true;

  // void 함수에서 아무것도 리턴하지 않으면 void 설정
  function print(): void {
    console.log('hello');
  }

  // never 절대 리턴하지 않는 함수 (error 혹은 while문)
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message);
    while (true){}
  }

  //objet 가능하면 사용 x
  let obj:object;
  function acceptSOmeObject(obj:object) {
  }
  acceptSOmeObject({name:'name'});
}