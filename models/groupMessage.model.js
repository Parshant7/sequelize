module.exports = (sequelize, Sequelize) => {
    const groupMessages = sequelize.define("groupMessages", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      parentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'replyMessage',
          key: 'replyMessageId'
        }
      },
      msg: {
        type: Sequelize.STRING,
        allowNull: false    
      },
    },{
      indexes: [
        {
          fields: ['parentId']
        }
      ]
    });
    
    return groupMessages;
  };
  