{
  /**
   *  Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move (direction:Direction) {
    console.log(direction)
  }
  move('left');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    }
  }

  type Failstate = {
    reason: string;
  }

  type LoginState = SuccessState | Failstate
  function login(id:string, password:string): LoginState {
    return {
      response: {
        body: 'logged in'
      }
    }
  }

  //printLoginState(state)
  // success -> 성공
  // fail -> 실패

  function printLoginSate(state:LoginState) {
    'response' in state ? console.log(`${state.response}`) : console.log(`${state.reason}`);
  }
}