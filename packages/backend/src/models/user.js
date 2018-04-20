import Sequelize from 'sequelize'
import sequelize from '../connectors/db'

const User = sequelize.define('user', {
  ipAddress: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  }
})
User.sync({force: false})



export default User