// PRODUCT DB CONFIG --- IMPORT SEQUELIZE -- TO USE AND CONNECT WITH THE DB IN MYSQL
import {Sequelize} from 'sequelize';
export const sequelize = new Sequelize('products_express', 'root', 'GracoSoft#00', {
    dialect: 'mysql',
    host: 'localhost'
});
