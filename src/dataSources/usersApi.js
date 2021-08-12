const { RESTDataSource } = require("apollo-datasource-rest");
const { usersApiUrl } = require('../server');

class UsersAPI extends RESTDataSource {
  
  constructor() {
    super();
    this.baseURL = usersApiUrl;
  }

  async authenticate(credentials) {
    return this.post('/token/', {...credentials});
  }

  async refreshToken(refresh) {
    return this.post('/token/refresh', refresh);
  }
}