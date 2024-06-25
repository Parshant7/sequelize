const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const replyMessage = require("./replyMessage.model.js")(sequelize, Sequelize);
const groupMessage = require("./groupMessage.model.js")(sequelize, Sequelize);

// db.replyMessage.hasMany()

/// works one to one
// groupMessage.hasOne(replyMessage, {sourceKey: 'parentId', foreignKey: "replyMessageId" });
// replyMessage.belongsTo(groupMessage, {as: 'reply', foreignKey: 'replyMessageId', targetKey: 'parentId'});
//------------------------------------------------------------------

//------------------------------------------------------------------
groupMessage.belongsTo(replyMessage, {targetKey: 'replyMessageId'});
replyMessage.hasMany(groupMessage, {as: 'reply', foreignKey: 'parentId', sourceKey: 'replyMessageId'});
//------------------------------------------------------------------

// replyMessage.hasMany(groupMessage, {sourceKey:'replyToMessageId', as: 'originalMessage', targetKey: 'parentId'});


// replyMessage.belongsToMany(groupMessage, { foreignKey: 'replyMessageId', targetKey: 'parentId', as: "reply" });

db.groupMessage = groupMessage;
db.replyMessage = replyMessage;
module.exports = db;