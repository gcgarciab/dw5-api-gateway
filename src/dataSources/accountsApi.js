const { RESTDataSource } = require("apollo-datasource-rest");
const { accountsApiUrl } = require('../server');

class AccountsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = accountsApiUrl;
  }

  async accountByUserId(userId) {
    return await this.get(`/accounts/${userId}`);
  }

  async transactionsByUserId(userId) {
    return await this.get(`/transactions/${userId}`);
  }

  async createTransaction(transaction) {
    return await this.post(`/transactions/`, transaction);
  }

}

module.exports = AccountsAPI;