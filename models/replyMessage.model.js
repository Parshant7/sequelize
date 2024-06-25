module.exports = (sequelize, Sequelize) => {
    const groupMessages = sequelize.define("replyMessage", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      replyToMessageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'groupMessages',
          key: 'parentId'
        }
      },
      replyMessageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'groupMessages',
          key: 'parentId'
        }
      },
    });
  
    return groupMessages;
  };
  