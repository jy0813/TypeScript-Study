{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text ='name';
  const address: Text = 'address';
  type Num = number;
  type Student = {
    name: string;
    age:number;
  }
  const student: Student = {
    name:'dog',
    age:12,
  }

  /**
   * String Literal Types
   */
  type Name = 'name';
  let myName: Name;
  myName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
  type Boal = true;
  const isClick: Boal = true;
}