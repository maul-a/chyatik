import Sequelize from 'sequelize'
import sequelize from '../connectors/db'

const User = sequelize.define('user', {
  ipAddress: {
    type: Sequelize.STRING,
  },
})
User.sync({force: false})



export default User