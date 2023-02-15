{
  /**
   * Type Inference: 타입추론, 자동으로 타입을 유추
   */

  let text = 'hello'; // 자동으로 타입을 유추
  text = 'hi';
  function print(message:string) { // 인자는 타입을 정해주는게 좋음.
    console.log(message);
  }

  function add(x:number, y:number) {
    return x + y;
  }

  const result = add(1,2);
}