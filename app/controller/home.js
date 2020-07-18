'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app } = this;
    let pass = 0;
    if(!ctx.session.userInfo){
      ctx.session.userInfo = {name: "wewe"}
      ctx.session.userInfo.pass = pass
    }else{
      ctx.session.userInfo.pass++
    }
    
    ctx.body = this.config.baseDir; 
    
  }
}

module.exports = HomeController;
