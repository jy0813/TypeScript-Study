{
  /**
   * Type Assertions - 좋지는 않음 (불가피하게 써야하는 경우가 있음)
   */

  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  console.log((result as String).length);
  console.log((<String>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // no!

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2); // no!

  const button = document.querySelector('button')!;
}