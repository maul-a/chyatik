import Sequelize from 'sequelize'

const databaseURI = process.env['DATABASE_URI']
const sequelize = new Sequelize(databaseURI);




sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize