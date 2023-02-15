{
  // Array
  const fruits:string[] = ['사과', '바나나'];
  const numbers:Array<number> = [1,2,3];
  function printArray(fruits: readonly string[]) { // object의 불변성 보장
  }

  // Tuple - interface, type alias, class 로 대체
  let student:[string, number];
  student = ['name',123];
  student[0] // name
  student[1] // 123
  const [name, age] = student;
}