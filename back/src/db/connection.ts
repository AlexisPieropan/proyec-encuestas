import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', 'El+Incredulo1', {
    host: 'localhost',
    dialect: 'mysql'
    
  });

  export default sequelize;