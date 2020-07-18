const path = require("path")
const  DBCONFIG  = require("./db")
const sqlConfig = {
  ...DBCONFIG,
  dialect: 'mysql',
  // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
  underscored: true,
  // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
  timezone: '+08:00'
}

module.exports = (appInfo) => {
  return {
    keys: "itxxb.com",
    security: {
      xframe: {
        enable: true,
      },
      csrf: {
        enable: false,
        ignoreJSON: true
      },
      // domainWhiteList:['.itxxb.com']   //安全跳转的方法，可以通过配置白名单避免这种风险。
    },
    cors : {
      origin:'*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    },
    logger : {
      encoding: 'utf-8',
      outputJSON: true,
      output: false
    },
    session: {
      renew: true,
      key: 'EGG_SESS',
      maxAge: 7*24*3600 * 1000, // 1 星期 session 过期
      httpOnly: true,
      encrypt: true,
    },
    middleware: [ 'errorHandler' ],
    sequelize: sqlConfig,
    multipart : {
      fileSize: '50mb',
      mode: "stream",
      fileExtensions: [
        '.foo',
        '.apk',
      ]
    }
  }
}