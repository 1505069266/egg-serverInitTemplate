
module.exports = appInfo => {
  if(appInfo.env === "local"){
    require("./config.local.js")(appInfo)
  }else{
    require("./config.prod.js")(appInfo)
  }
};
