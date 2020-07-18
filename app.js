module.exports = app => {
  app.beforeStart(async ()=>{
    //sequelize 根据model生成数据库表结构
    await app.model.sync({ force: true })
  })

}