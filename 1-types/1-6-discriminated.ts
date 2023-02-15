{
  // function: login -> success, fail
  type SuccessState = {
    result:'success';
    response: {
      body: string;
    }
  }

  type Failstate = {
    result:'fail';
    reason: string;
  }

  type LoginState = SuccessState | Failstate
  function login(id:string, password:string): LoginState {
    return {
      result:'success',
      response: {
        body: 'logged in'
      }
    }
  }

  //printLoginState(state)
  // success -> 성공
  // fail -> 실패

  function printLoginSate(state:LoginState) {
    state.result === 'success' ? console.log(`${state.response.body}`) : console.log(`${state.reason}`);
  }
}