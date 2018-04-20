import Sequelize from 'sequelize'
import sequelize from '../connectors/db'
import User from './user'

const Message = sequelize.define('message', {
  text: {
    type: Sequelize.STRING,
  },
})
Message.belongsTo(User, { onDelete: 'CASCADE' });
Message.sync({force: false})

export default Message