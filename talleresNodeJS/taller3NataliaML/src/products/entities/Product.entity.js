import { sequelize } from '../../db/p.db.config.js';
import { Sequelize } from 'sequelize';

export const Product = sequelize.define('product', 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        quantity: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    }
);