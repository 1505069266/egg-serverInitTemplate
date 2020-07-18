const Controller = require("egg").Controller;
const fs = require("fs")
const util = require("util")

class UserController extends Controller{
  async getById(){
    const { ctx } = this
    let promiseReadFile = util.promisify(fs.readFile)
    let html = await promiseReadFile("./1.html")
    let data = await ctx.service.user.user.getById()
    ctx.set("content-type", "application/json")
    ctx.body = html
  }
}

module.exports = UserController;