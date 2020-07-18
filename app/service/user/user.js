const Service = require("egg").Service

class UserService extends Service{
  async getById(){
    const id = 1
    return {
      name: "name",
      age: 18,
      id
    }
  }
}


module.exports = UserService;