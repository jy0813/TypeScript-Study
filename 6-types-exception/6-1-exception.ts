{
  // Java : Exception
  // Javascript : Error;
  // const array = new Array(1000000000000000);

  // Error(Exception) Handling: try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === 'not!') {
      throw new Error(`fle not exist ${fileName}`);
    }
    return 'file contents'
  }

  function closeFile(fileName: string) {
  //
  }

  function run() {
    const fileName = 'not!';


    try {
      console.log(readFile(fileName));
    } catch (err) {
      console.log(`catched!!`)
      return;
    } finally {
      closeFile(fileName);
      console.log('finally')
    }
  }

  run();
  console.log('!!!')
}

