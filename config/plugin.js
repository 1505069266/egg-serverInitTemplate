'use strict';
const path = require("path")

exports.mysql = {
  enable: false,
  package: "egg-mysql"
}


exports.cors = {
  enable: false,
  package: "egg-cors"
}


exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
