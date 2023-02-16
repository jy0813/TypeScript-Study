{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  type NetworkErrorState = {
    result:'fail';
    reason:'offline' | 'down' | 'timeout';
  }

  type SuccessState = {
    result:'success'
  }

  type ResultState = SuccessState | NetworkErrorState
  class NetworkClient {
    tryConnect():ResultState{
      return { result:'fail', reason:'offline'}
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {
    }

    login() {
     this.client.tryConnect();
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {
    }

    run() {
      try {
        this.userService.login();
      } catch (err) {
        // sgow dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  service.login();

  const app = new App(service);
  app.run();
}